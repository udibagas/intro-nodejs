const http = require("node:http"); // commonjs

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); // http status code : 200 => OK
  res.end("Hello World!\n");
});
// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
