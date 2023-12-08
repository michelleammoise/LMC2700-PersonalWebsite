var banner = document.querySelector('.banner');
var navbar = document.querySelector('.navbar');
var navleftside = document.querySelector('.nav-left-side');
var navrightside = document.querySelector('.nav-right-side');
// var anchor=document.querySelector('.navbar-list')



banner.addEventListener('click', () => {
  navrightside.classList.toggle('v-class');
  navleftside.classList.toggle('v-class');
  navbar.classList.toggle('h-nav');
  // anchor.classList.toggle('v-class')
})


// function scrollleft() {
//   document.getElementById("scrolling-text").style.left = '100%';
//   setTimeout(scrollleft, 25);
// }
//  scrollleft();
