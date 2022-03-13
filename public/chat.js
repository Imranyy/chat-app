
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
  btn.style.display="none";
  feedback.innerHTML='',
  output.innerHTML+='<div style="background-color:#282c34; font-family:cursive; color:#ebf0fc; height: fit-content; display:block;padding:10px 0 10px 10px;margin:20px 30px 0 30px;border-radius:12px;"><strong style="color:#61dafb;">'+data.handle+' : </strong><br/><p>'+data.message+'</p></div>';
});
  
message.addEventListener('keypress', function(){
  socket.emit('typing',handle.value);
 });
 socket.on('typing',function(data){
    feedback.innerHTML='<p><em>'+data+' is typing...</em></p>';
 })
 message.addEventListener('keypress', function(){
  socket.emit('typing',handle.value);
  btn.style.display="block";
 });

