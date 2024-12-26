const onButton = document.querySelector('#onButton');
const circle = document.querySelector('.circle');

let flag=1;
onButton.addEventListener('click',()=>{
    if(flag==1){
        circle.style.backgroundColor = 'yellow';
        flag=0;
        onButton.innerHTML="ON"
    }
    else{
        circle.style.backgroundColor = 'black';
        flag=1;
        onButton.innerHTML="OFF"
    }
})

// onButton.addEventListener('click', () => {
//     if (circle.classList.contains('on')) {
//         circle.classList.remove('on'); 
//         onButton.textContent = 'On';
//     } else {
//         circle.classList.add('on'); 
//         onButton.textContent = 'Off'; 
//     }
// });
