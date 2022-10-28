const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost", 
    port: 50541
  });
    conn.setEncoding("utf8");

    conn.on("data", (data)=> {
      console.log(data)
  });

    conn.on("connect", (client) =>{
//success message on connection
      console.log('Successfully connected to game server');
//shows initials when connected
      conn.write('Name: CKD');
  });  

  return conn;
};


module.exports = {
  connect
};


    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, "2000")

    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, "3000")

    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, "4000")

    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, "5000")
