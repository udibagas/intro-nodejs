const http = require("node:http"); // built-in module
const moment = require("moment"); // module external
const { greet } = require("./libs/greeting"); // custom module

const server = http.createServer((req, res) => {
  const currentTime = moment().format("dddd, D MMMM YYYY, hh:mm:ss a");
  const greeting = greet("World");
  res.writeHead(200, { "Content-Type": "text/plain" }); // http status code : 200 => OK
  res.end(`
    ${greeting}!\n
    Current Time = ${currentTime}
  `);
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
