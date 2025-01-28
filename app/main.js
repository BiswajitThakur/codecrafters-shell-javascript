const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.stdout.write("$ ");

rl.on("line", (line) => {
  execute_cmd(line);
  process.stdout.write("$ ");
});

function execute_cmd(cmd) {
  console.log(`${cmd}: command not found`);
}
