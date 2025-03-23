import * as path from "path";
import { exec, execFile } from "child_process";

function main() {
  const config = require("../config.json");

  const child = exec("tstl --watch -p tsconfig.json");
  console.log("Transpiling TypeScript to Lua...");

  child.stdout?.once("data", () => {
    const launcher = path.resolve(config.launcher);
    const file = path.resolve("dist", `${config.name}.w3x`);
    console.log(`Launching ${file}`);
    execFile(launcher, ["-launchwar3", "-loadfile", file]);
  });
}

main();
