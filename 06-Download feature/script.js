// setInterval(function(){
//     console.log('running...');
// },100)

// setTimeout(function(){
//     console.log('this is timeout')
// },3000)
// setInterval(function(){
//     console.log('interval...')
// },1000)

// var num=0;
// setInterval(function(){
//     num++
//     console.log(num);
// },1000)


var btn=document.querySelector('button')
var h1= document.querySelector('h1')
var growth=document.querySelector('#growth')
var message = document.querySelector('h2')
var grow=0;
// var num=Math.floor(Math.random()*100)
var random= Math.floor(Math.random()*100)

// var num= Math.floor(Math.random()*100)

// var num2=Math.floor(num)
// console.log(num2)

btn.addEventListener('click',function(){
 var growInterval=   setInterval(function(){
        grow++
        h1.innerHTML=grow+'%'
        growth.style.width=grow +'%'
    },random)

    setTimeout(function(){
        clearInterval(growInterval)
        btn.innerHTML=('Downloaded')
        btn.style.opacity=0.4
        btn.style.pointerEvents='none'
        message.innerHTML = `Your file is downloaded in ${random /10} milliseconds.`;
    },random*100)
})
