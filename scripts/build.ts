import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

/**
 * 先将dist下的地图文件删除，再复制新地图文件过去
 * 编译tstl_output文件到新地图目录下
 * 开始打包
 *
 * maps下面十地图文件，包括w3x、ini、ts2lua文件
 * 需要w3x文件来编辑地图
 * dist目录下放w3x产线版本，混淆加密且没有debug
 */
function main() {
  const config = require("../config.json");
  const tsconfig = require("../tsconfig.json");
  const temp = "dist";

  console.log("Transpiling TypeScript to Lua...");
  execSync("tstl -p tsconfig.json", { stdio: "inherit" });

  const tsLua = path.resolve(tsconfig.tstl.luaBundle);
  if (!fs.existsSync(tsLua)) {
    console.log(`Could not find "${tsLua}"`);
    return false;
  }

  const w2l = path.resolve(config.w2l);
  const dir = path.resolve("maps", config.name);
  const file = path.resolve(temp, `${config.name}.w3x`);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  // fs.renameSync(tsLua, path.resolve(dir, "map", tsLua));
  // fs.renameSync(tsLua, path.resolve(temp, tsconfig.tstl.luaBundle));

  console.log(`注入环境...`);
  injectEnv(path.resolve(`${dir}`, "map", "base"), temp);

  console.log(`Creating w3x archive...`);
  execSync(`${w2l} obj ${dir} ${file}`, { stdio: "inherit" });
  console.log("Finished!");
}

function compileTstl(output: string) {
  const tsconfig = require("../tsconfig.json");
  const tstlFile = tsconfig.tstl.luaBundle;
  const tstlPath = path.resolve(tstlFile);
  
  console.log("Transpiling TypeScript to Lua...");
  execSync("tstl -p tsconfig.json", { stdio: "inherit" });
  // fs.renameSync(tstlPath, path.resolve(output, tstlFile));
}

function injectEnv(filePath: string, luaPath: string) {
  // 获取当前项目目录
  // const projectDir = path.resolve(__dirname);
  const projectDir = process.cwd();

  // Lua代码，将当前项目目录添加到package.path
  const env = path.resolve(projectDir, luaPath);
  const luaContent = [
    // "local console = require 'jass.console'",
    `package.path = package.path .. ';${env.replace(/\\/g, "/")}/?.lua'`,
    // "console.enable = true",
    "require('jass.console').enable = true",
    // "print('env.lua loaded')"
  ].join("\n");

  // Lua文件路径
  const luaFilePath = path.resolve(projectDir, filePath, "env.lua");

  // 创建并写入Lua文件
  fs.writeFileSync(luaFilePath, luaContent);
}
main();
