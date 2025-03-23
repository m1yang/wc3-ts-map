import * as path from "path";
import { execSync } from "child_process";

// 将we编辑的地图转为lni格式
function main() {
  const config = require("../config.json");

  const w2l = path.resolve(config.w2l);
  const dir = path.resolve("maps", config.name);
  const file = path.resolve("dist", `${config.name}.w3x`);
  execSync(`${w2l} lni ${file} ${dir}`, { stdio: "inherit" });
}

main();
