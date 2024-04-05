const express = require("express");
const http = require("http");
const { Server: SocketIOServer } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);
const comments = [];

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("newComment", (comment) => {
    // Lưu trữ bình luận vào cơ sở dữ liệu
    // ...
    comments.push(comment);

    // Gửi bình luận đến tất cả clients
    io.emit("commentReceived", comment);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(5173, () => {
  console.log("Listening on port 4000");
});
