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


/* create a simple page animation that fade transitions to next page when click */
// Path: script.js

