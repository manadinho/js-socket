const Websocket = require("ws");

const wss = new Websocket.Server({ port: 6001 });

wss.on("connection", (ws) => {
  console.log("new client connected");

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  ws.on("message", (data) => {
    ws.send("fine thank you");
  });
});
