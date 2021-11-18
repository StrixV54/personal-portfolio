const navbar = document.querySelector('#navbar');
let navTop = navbar.offsetTop+10;
console.log(navTop);
function fixedNav() {
  if (window.scrollY >= navTop) {    
    navbar.classList.add('fixed');
    console.log("helloo");
  } else {
    navbar.classList.remove('fixed');    
  }
}
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', fixedNav);
})