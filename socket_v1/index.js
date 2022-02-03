const express = require("express");

const app = express();

const http = require("http");
const server = http.createServer(app);

// create the socket io connection

const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// add the event emiter
io.on("connection", (socket) => {
  socket.on("chat", (msg) => {
    console.log(msg);
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
