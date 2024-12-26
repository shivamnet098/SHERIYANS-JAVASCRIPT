var box = document.querySelector('#box1');
var btn = document.querySelector('.button1');
var box2 = document.querySelector('#box2');
var btn2 = document.querySelector('.button2');

btn.addEventListener('click', function() {
    var c1 = Math.floor(Math.random() * 255);
    var c2 = Math.floor(Math.random() * 255);
    var c3 = Math.floor(Math.random() * 255);

    box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
});

btn2.addEventListener('click', function() {
    var c1 = Math.floor(Math.random() * 255);
    var c2 = Math.floor(Math.random() * 255);
    var c3 = Math.floor(Math.random() * 255);

    box2.style.height = `${c1}px`;
    box2.style.width = `${c2}px`;
    box2.style.borderRadius = `${c3}px`;
});

