import * as path from "path";
import type { ExecFileException } from "child_process";
import { execFile} from "child_process";

function main() {
  const config = require("../config.json");
  const launcher = path.resolve(config.we);
  const file = path.resolve("maps", config.name, ".w3x");

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
}

main();
