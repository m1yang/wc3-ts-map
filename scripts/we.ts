import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";
import type { ExecFileException } from "child_process";
import { execSync, execFile, spawn, execFileSync, exec } from "child_process";

// const file = path.resolve('./demo.w3x');
// const fileContent = fs.readFileSync(file)
// const mtime =fs.statSync(file).mtime;
// const fileUploadedHash = crypto.createHash('md5').update(fileContent).digest('base64');
// console.log(`${mtime}-文件更新的hash值: ${fileUploadedHash}`);

function main() {
  const config = require("../config.json");
  const launcher = path.resolve(config.we);
  const w2l = path.resolve(config.w2l);
  const dir = path.resolve("maps", config.name);
  const file = path.resolve("dist", `${config.name}.w3x`);

  // 先重新打包，避免新的资源文件没有被打包进去
  // 获取文件当前修改日期
  execSync(`${w2l} obj ${dir} ${file}`, { stdio: "inherit" });
  // const old = fs.statSync(file).mtimeMs;

  console.log(`Launching ${file}`);
  execFile(
    launcher,
    ["-loadfile", file],
    (err: ExecFileException | null) => {
      if (err && err.code === "ENOENT") {
        console.log(
          `No such file or directory "${launcher}". Make sure YDWEConfig.exe is configured properly in config.json.`
        );
      }
    }
  );

  // 获取we程序执行后的文件日期
  // 两个日期做比较，如果不同则重新解包
  // 没用
  // ps.once("close", () => {
  //   const now = fs.statSync(file).mtimeMs;
  //   if (now !== old) {
  //     console.log(`文件${file}修改日期变化，重新解包...`);
  //     execSync(`${w2l} lni ${file} ${dir}`, { stdio: "inherit" });
  //   }
  // });

  fs.watchFile(file, (curr, prev) => {
    if (curr.mtimeMs !== prev.mtimeMs) {
      console.log(`文件${file}修改日期变化，重新解包...`);
      execSync(`${w2l} lni ${file} ${dir}`, { stdio: "inherit" });
    }
  });
}

main();
