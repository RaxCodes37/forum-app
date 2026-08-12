import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    socket.on(
      "forum-created",
      ({ forumName, userName }) => {
        console.log(`User: ${userName} created new forum: ${forumName}`);
      },
    );
    socket.on("message", ({ messageContent, messageCreatorName }) => {
      console.log(`user: ${messageCreatorName} sent ${messageContent}`)
      socket.broadcast.emit("message", { messageContent, messageCreatorName });
    });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
