//make connection
//import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
var socket = io.connect();
//query DOM
const message=document.getElementById('message'),
 handle=document.getElementById('handle'),
 btn=document.getElementById('send'),
 output=document.getElementById('output'),
 feedback=document.getElementById('feedback');
//emit events
//btn.addEventListener('click',function(){
  //  socket.emit('chat',{message:message.value, handle:handle.value});
//});
//listen for events
//socket.on('chat', function(data){
    //feedback.innerHTML="",
    //output.innerHTML='<p><strong>'+data.handle+':</strong>'+data.message+'</p>';
    //socket.on('typing',function(data){ feedback.innerHTML='<p><em>'+data+'is typing </em></p>';
    //message.addEventListener('keypress', function(){
     //socket.emit('typing',handle.value);
    //});
     
    //});
//});