// var h1=document.createElement('h1')
// var body=document.querySelector('body')
// h1.innerHTML='hello from js'
// console.log(h1)
// document.body.appendChild(h1);

// var h1=document.createElement('h1')
// var body=document.querySelector('body')
// h1.innerHTML='hello from js'
// h1.style.color='red'
// document.body.appendChild(h1);

// body.appendChild(h1)
// console.log('h1')

var img1=document.querySelector('#img1')
var img2=document.querySelector('#img2')
var btn=document.querySelector('button')


btn.addEventListener('click',function(){
    var img1SRC=img1.getAttribute('src')
    var img2SRC=img2.getAttribute('src')

    img1.setAttribute('src',img2SRC)
    img2.setAttribute('src',img1SRC)
})