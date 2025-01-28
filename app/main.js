const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("$ ", (answer) => {
  execute_cmd(answer);
  rl.close();
});

/*
rl.on("line", (line) => {
  execute_cmd(line);
});
*/
function execute_cmd(cmd) {
  console.log(`${cmd}: command not found`);
}
