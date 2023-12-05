const scripturl = 'https://script.google.com/macros/s/AKfycbxUm_XNSJwTurMt6z5jSP6qy_6kOBnAiVCz5NtVLeXxpiR2Y6461Wnbm45kPBuRuu2zEw/exec'
const msgbox = document.getElementById('msgmsg')
const form = document.forms['msgform']
const tcpopup = document.getElementById('t_c_popup');
function openpopup(){
    tcpopup.style.left="50%";
}
function closepopup(){
    tcpopup.style.left="200%";
}
form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(scripturl , {method:'POST', body: new FormData(form)})
    .then(msgbox.style.display='block')
    .then(()=>{window.location.href('');})
    .catch(error => console.log(error))
})