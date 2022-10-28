// Stores the active TCP connection object.
let connection;

/*handleUserInput:
1) console.logs movement commands bound to keys WASD
2) exits process when ctrl + c is pressed
*/

const handleUserInput = i => {
  
  if (i === "W" || i === "w") {
    console.log("Move: up");
  }
  if (i === "A" || i === "a") {
    console.log("Move: left");
  }
  if (i === "S" || i === "s") {
    console.log("Move: down");
  }
  if (i === "D" || i === "d") {
    console.log("Move: right");
  }
  if (i === '\u0003') { 
    process.exit();
  }
};

const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = {
  setupInput
};