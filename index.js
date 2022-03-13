const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(require('cors')());
//socket setup
io.on('connection', (socket)=>{
    console.log('a user connected', socket.id);
    //socket.on('chat',function(data){
       //io.sockets.emit('chat',data);
    //});
    //socket.on('typing',function(data){
      //  socket.broadcast.emit('typing',data);
    //});
});
//static files
app.use(express.static('public'));
//io.on('connection', (socket)=>{
    
//});

 server.listen(4000,function(){
 console.log('listening to Port 4000')
});