import http from 'http';
import { Server } from "socket.io";
import { RedisConsumer } from './consumer';
import { port } from './config';

const httpServer = http.createServer(),
io = new Server(httpServer);

RedisConsumer.subscribe();

io.on("connection", socket => {
  socket.join("roomId");
  socket.on("error", error => {
    console.error("Error countered", error);
  });
  socket.on("disconnect", reason => {
    console.log("Client disconnected", reason);
  });
});

httpServer.listen(port);
