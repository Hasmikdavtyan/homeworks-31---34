const socket = io();

let form = document.getElementById('msgForm')
console.log(form)

socket.on('textMsg', msgFromInp=>{
    const div = document.createElement('div')
    div.innerHTML = ` <p >  ${msgFromInp} </p>`
    let msgContainer=document.getElementsByClassName('chat-messages')[0]
    msgContainer.appendChild(div)
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let inp = document.getElementById('msgInp')

   let message = inp.value
   socket.emit('msg', message)
   document.getElementById('msgInp').value = ''

})
