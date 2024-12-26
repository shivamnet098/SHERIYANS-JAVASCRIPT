const users = [
  {
      profilePhoto: "https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
      statusPhoto: "https://randomuser.me/api/portraits/men/2.jpg",
      fullName: "Ravi Kumar Singh",
      timeUploaded: "5 minutes ago",
      story:'https://images.unsplash.com/photo-1732806685351-bafb9848cebf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D'
  },
  {
      profilePhoto: "https://images.unsplash.com/photo-1615531068122-80040baba3bf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusPhoto: "https://randomuser.me/api/portraits/men/4.jpg",
      fullName: "Amit Yadav",
      timeUploaded: "10 hours ago",
      story:'https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
      profilePhoto: "https://images.unsplash.com/photo-1570540632899-440999fb3083?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
      statusPhoto: "https://randomuser.me/api/portraits/men/6.jpg",
      fullName: "Vikash Kumar",
      timeUploaded: "2 hours ago",
      story:'https://plus.unsplash.com/premium_photo-1676496045492-e3c34cfa74e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8'
  },
  {
      profilePhoto: "https://images.unsplash.com/photo-1610533289180-9d90161eba40?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
      statusPhoto: "https://randomuser.me/api/portraits/men/8.jpg",
      fullName: "Sandeep Prasad",
      timeUploaded: "3 minutes ago",
      story:'https://plus.unsplash.com/premium_photo-1676385793597-91b70754451e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
  },
  {
      profilePhoto: "https://images.unsplash.com/photo-1638615937928-d144b985a30a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym95JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
      statusPhoto: "https://randomuser.me/api/portraits/men/10.jpg",
      fullName: "Kumar Harsh",
      timeUploaded: "1 hour ago",
      story:'https://plus.unsplash.com/premium_photo-1676228650433-414ff159b65e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D'
  },
  {
      profilePhoto: "https://images.unsplash.com/photo-1571223875738-d7613341dfd9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJveSUyMGltYWdlfGVufDB8fDB8fHww",
      statusPhoto: "https://randomuser.me/api/portraits/men/12.jpg",
      fullName: "Manoj Kumar",
      timeUploaded: "5 minutes ago",
      story:'https://plus.unsplash.com/premium_photo-1676385793597-91b70754451e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
  },
  {
      profilePhoto: "https://images.unsplash.com/photo-1614744025915-36948e9847a5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJveSUyMGltYWdlfGVufDB8fDB8fHww",
      statusPhoto: "https://randomuser.me/api/portraits/men/14.jpg",
      fullName: "Ajay Yadav",
      timeUploaded: "7 hours ago",
      story:'https://plus.unsplash.com/premium_photo-1676385793597-91b70754451e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
  },
  {
      profilePhoto: "https://randomuser.me/api/portraits/men/15.jpg",
      statusPhoto: "https://randomuser.me/api/portraits/men/16.jpg",
      fullName: "Rajeev Ranjan",
      timeUploaded: "3 hours ago",
      story:'https://plus.unsplash.com/premium_photo-1676385793597-91b70754451e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
  },
  {
      profilePhoto: "https://randomuser.me/api/portraits/men/17.jpg",
      statusPhoto: "https://randomuser.me/api/portraits/men/18.jpg",
      fullName: "Sujay Kumar",
      timeUploaded: "6 minutes ago",
      story:'https://plus.unsplash.com/premium_photo-1676385793597-91b70754451e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
  },
  {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1661854744494-d2f80c52cd5d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJveSUyMGltYWdlfGVufDB8fDB8fHww",
      statusPhoto: "https://randomuser.me/api/portraits/men/20.jpg",
      fullName: "Shivendra Yadav",
      timeUploaded: "10 minutes ago",
      story:'https://plus.unsplash.com/premium_photo-1676385793597-91b70754451e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
  }
];
let sum =''

users.forEach(function(elem,idx){
  sum += `<div class="status">
          <div class="overlays">
              <img id="${idx}" src="${elem.profilePhoto}" alt="">
          </div>
          <div id="font">
          <h4>${elem.fullName}</h4>
          <h5>${elem.timeUploaded}</h5>
          </div>
          
      </div>`
});


const main =document.querySelector('.main')

main.innerHTML=sum

// var allStatus = document.querySelector('.allStatus')
// var statusbar= document.querySelector('.status-bar')
// var fullUser = document.querySelector('#full h2')
var full=document.querySelector('.full')

var growth = document.querySelector('#growth')


main.addEventListener('click', function(dets) {
    var grow = 0;

    // Ensure the clicked element is valid and has an ID
    if (dets.target.id) {
        var story = users[dets.target.id].story; // Access the story based on the clicked index
        full.style.display = 'block';
        full.style.backgroundImage = `url(${story})`;

        var inter = setInterval(function() {
            grow++;
            growth.style.width = grow + '%';
        }, 30);

        setTimeout(function() {
            full.style.display = 'none';
            clearInterval(inter);
        }, 3000);
    }
});