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
      console.log('Successfully connected to game server');
      conn.write('Name: CKD')  

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, "2000")

    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, "3000")

    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, "4000")

    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, "5000")


    
  });  

  

  return conn;
};


module.exports = {
  connect
};
