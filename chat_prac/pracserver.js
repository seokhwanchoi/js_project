const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  var flag=0;
  ws.on('message', function message(data) {
    if(++flag==3){
      let tempData = JSON.parse(data);
      console.log(`[${tempData.TimeLog}] [${tempData.userId}] : ${tempData.contents} `);
      flag=0;
    }
    
  });
  
  ws.send('something');
});



// const express = require('express');
// const http = require('http');
// const WebSocket = require('ws');

// const port = 6969;
// const server = http.createServer(express);
// const wss = new WebSocket.Server({ server })

// wss.on('connection', function connection(ws) {
//   ws.on('message', function incoming(data) {
//     wss.clients.forEach(function each(client) {
//       if (client !== ws && client.readyState === WebSocket.OPEN) {
//         client.send(data);
//         console.log(client.url);
//         console.log(data.toString());
//       }
//     })
//   })
// })

// server.listen(port, function() {
//   console.log(`Server is listening on ${port}!`)
  
// })