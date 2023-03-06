function setFocus () {
    document.getElementById('m-input-text').focus();
  }
function send() {
    // document.getElementById('m-send-vector-icon').focus();
    var send=document.getElementById('m-input-text').innerHTML;
    var demo= document.getElementById('demo')
    const div=document.createElement('div');
    const para=document.createTextNode(send);
    div.appendChild(para);
    demo.appendChild(div);

    div.style.height='auto';
    div.style.width='auto';
    // div.style.border='2px solid black';
    div.style.backgroundColor='#a0a0a0';
    div.style.color='white';
    div.style.marginLeft='76%';
    div.style.borderRadius='20px';
    div.style.paddingLeft='20px';
    div.style.marginTop='10px';
    div.style.marginBottom='20px';
    div.style.marginRight='10px';
}
function attachment()
{
  var x=document.getElementById('m-attachment-icon');
  x.classList.toggle('attachment1');
}