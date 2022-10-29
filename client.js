const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf8");

  conn.on("connect", () =>{
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
