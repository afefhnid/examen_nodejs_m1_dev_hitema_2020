const WebSocket = require("ws");
const webSocketServer = new WebSocket.Server({ port: 3003 });
const history = [];
webSocketServer.on("connection", (webSocket) => {
  webSocket.send(JSON.stringify(history));
  webSocket.onmessage = (messageEvent) => {
    const message = messageEvent.data;
    webSocketServer.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  };
});

module.exports = webSocketServer;
