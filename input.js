// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;
  return stdin;
};

/* handleUserInput:
1) exits process when ctrl + c is pressed
2) executes movement command via WASD input keys
*/
const handleUserInput = (i) => {

  if (i === '\u0003') { 
    console.log('Sssssee you next time 🐍');
    return process.exit();
  }
  if (i === "W" || i === "w") {
    connection.write("Move: up");
  }
  if (i === "A" || i === "a") {
    connection.write("Move: left");
  }
  if (i === "S" || i === "s") {
    connection.write("Move: down");
  }
  if (i === "D" || i === "d") {
    connection.write("Move: right");
  }
};

module.exports = {
  setupInput
};

