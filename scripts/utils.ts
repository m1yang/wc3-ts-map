import { execSync } from "child_process";
import { writeFileSync } from "fs";
import * as fs from "fs-extra";
import * as path from "path";

const luamin = require('luamin');

export interface IProjectConfig {
  mapFolder: string;
  minifyScript: boolean;
  gameExecutable: string;
  outputFolder: string;
  w2l: string;
  launchArgs: string[];
}

/**
 * Load an object from a JSON file.
 * @param fname The JSON file
 */
export function loadJsonFile(fname: string) {
  try {
    return JSON.parse(fs.readFileSync(fname).toString());
  } catch (e: any) {
    console.log(e.toString());
    return {};
  }
}

/**
 * 删除非空文件夹
 * @param dirPath The JSON file
 */
export function deleteFolder(dirPath: string) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // 递归删除文件夹
        deleteFolder(curPath);
      } else {
        // 删除文件
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dirPath);
  }
}

/**
 * Convert a Buffer to ArrayBuffer
 * @param buf
 */
export function toArrayBuffer(b: Buffer): ArrayBuffer {
  var ab = new ArrayBuffer(b.length);
  var view = new Uint8Array(ab);
  for (var i = 0; i < b.length; ++i) {
    view[i] = b[i];
  }
  return ab;
}

/**
 * Convert a ArrayBuffer to Buffer
 * @param ab
 */
export function toBuffer(ab: ArrayBuffer) {
  var buf = Buffer.alloc(ab.byteLength);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buf.length; ++i) {
    buf[i] = view[i];
  }
  return buf;
}

/**
 * Recursively retrieve a list of files in a directory.
 * @param dir The path of the directory
 */
export function getFilesInDirectory(dir: string) {
  const files: string[] = [];
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      const d = getFilesInDirectory(fullPath);
      for (const n of d) {
        files.push(n);
      }
    } else {
      files.push(fullPath);
    }
  });
  return files;
};

function updateTSConfig(mapFolder: string) {
  const tsconfig = loadJsonFile('tsconfig.json');
  const plugin = tsconfig.compilerOptions.plugins[0];

  plugin.mapDir = path.resolve('maps', mapFolder).replace(/\\/g, '/');
  plugin.entryFile = path.resolve(tsconfig.tstl.luaBundleEntry).replace(/\\/g, '/');
  plugin.outputDir = path.resolve('dist', mapFolder).replace(/\\/g, '/');

  writeFileSync('tsconfig.json', JSON.stringify(tsconfig, undefined, 2));
}

/**
 *
 */
export function compileMap(config: IProjectConfig) {
  if (!config.mapFolder) {
    console.log(`Could not find key "mapFolder" in config.json`);
    return false;
  }

  const tsLua = "./dist/tstl_output.lua";

  if (fs.existsSync(tsLua)) {
    fs.unlinkSync(tsLua);
  }

  console.log(`Building "${config.mapFolder}"...`);
  fs.copySync(`./maps/${config.mapFolder}`, `./dist/${config.mapFolder}`);

  // console.log("Modifying tsconfig.json to work with war3-transformer...");
  // updateTSConfig(config.mapFolder);

  console.log("Transpiling TypeScript to Lua...");
  execSync('tstl -p tsconfig.prod.json', { stdio: 'inherit' });

  if (!fs.existsSync(tsLua)) {
    console.log(`Could not find "${tsLua}"`);
    return false;
  }

  // Merge the TSTL output with war3map.lua
  const mapLua = `./dist/${config.mapFolder}/war3map.lua`;

  if (!fs.existsSync(mapLua)) {
    console.log(`Could not find "${mapLua}"`);
    return false;
  }

  try {
    let contents = fs.readFileSync(mapLua).toString() + fs.readFileSync(tsLua).toString();

    if (config.minifyScript) {
      console.log(`Minifying script...`);
      contents = luamin.minify(contents.toString());
    }

    fs.writeFileSync(mapLua, contents);
  } catch (err: any) {
    console.log(err.toString());
    return false;
  }

  return true;
}
