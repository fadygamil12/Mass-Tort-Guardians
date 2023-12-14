const msgscripturl = 'https://script.google.com/macros/s/AKfycbxUm_XNSJwTurMt6z5jSP6qy_6kOBnAiVCz5NtVLeXxpiR2Y6461Wnbm45kPBuRuu2zEw/exec'
const clscripturl = 'https://script.google.com/macros/s/AKfycbxK18w62CMdl0MBJiqtEz0fDxRZTMgcefgFsZgmikzDepZj0DHppWU63P08awPRx9E26g/exec'
const ruscripturl = 'https://script.google.com/macros/s/AKfycbx6O4FMDxE-rLFON2syljLLKqn-jAIHTSgCratfXIxHO7fxDlfqRtCJwxTCGBEm62kVhg/exec'
const msgbox = document.getElementById('msgmsg')
const msg_form = document.forms['msgform']
const cl_form = document.forms['clform']
const ru_form = document.forms['ruform']
const tcpopup = document.getElementById('t_c_popup');
function openpopup(){
    tcpopup.style.left="50%";
}
function closepopup(){
    tcpopup.style.left="200%";
}
if (cl_form){
    cl_form.addEventListener('submit', e=>{
        e.preventDefault()
        console.log(e)
        fetch(clscripturl , {method:'POST', body: new FormData(cl_form)})
        .then(msgbox.style.display='block')
        .then(window.alert("Submitted"))
        .then(()=>{window.location.href('');})
        .catch(error => console.log(error))
    })
}
if (msg_form){
msg_form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(msgscripturl , {method:'POST', body: new FormData(msg_form)})
    .then(msgbox.style.display='block')
    .then(()=>{window.location.href('');})
    .catch(error => console.log(error))
})
}
if (ru_form){
    ru_form.addEventListener('submit', e=>{
        e.preventDefault()
        fetch(ruscripturl , {method:'POST', body: new FormData(ru_form)})
        .then(msgbox.style.display='block')
        .then(window.alert("Submitted"))
        .then(()=>{window.location.href('');})
        .catch(error => console.log(error))
    })
}

$(window).on("load",function(){
    setTimeout(function(){
        $(".loader-wrapper").fadeOut("slow");
    },500)
    
});