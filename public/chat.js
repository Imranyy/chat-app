
//query DOM
var message=document.getElementById('message'),
  handle=document.getElementById('handle'),
  btn=document.getElementById('send'),
  output=document.getElementById('output');
  feedback=document.getElementById('feedback');
//emit events
btn.addEventListener('click',function(){
  socket.emit('chat',{
    message:message.value,
    handle:handle.value
  });
});
//listen for events
socket.on('chat', function(data){
  message.value='',
  handle.value='',
  feedback.innerHTML='',
  output.innerHTML+='<p style="background-color:#282c34; font-family:cursive; color:#ebf0fc;min-height:600%; display:block;padding:10px 0 10px 10px;margin:20px 30px 0 30px;border-radius:12px;"><strong style="color:#61dafb;">'+data.handle+'  </strong><br/>'+data.message+'</p>';
});
  
message.addEventListener('keypress', function(){
  socket.emit('typing',handle.value);
 });
 socket.on('typing',function(data){
    feedback.innerHTML='<p><em>'+data+' is typing...</em></p>';
 })
 message.addEventListener('keypress', function(){
  socket.emit('typing',handle.value);
 });

