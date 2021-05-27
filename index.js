const http = require("http");
const router = require("./router");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

    //Route
    router(req, res);
  })
  .listen(3030, console.log("Server up and running"));
