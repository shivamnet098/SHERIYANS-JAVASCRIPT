var btn=document.querySelector('button')
var h2=document.querySelector('h2')


btn.addEventListener('click',function(){
    h2.innerHTML='Request Sending'
    h2.style.color='Yellow'

    setTimeout(function(){
    h2.innerHTML='Friends'
    h2.style.color='Green'
    },5000)
})