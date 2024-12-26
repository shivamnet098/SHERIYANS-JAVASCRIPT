var btn =document.querySelectorAll('button')
var body=document.querySelector('body')

btn.forEach(function(elem){
    elem.addEventListener('click',function(){
    var color=elem.innerHTML
    body.style.backgroundColor=color
})
}) 