const navbar = document.querySelector('#navbar');
const navlogo = document.querySelector('.logo');
let navTop = navbar.offsetTop+30;
console.log(navTop);
function fixedNav() {
  if (window.scrollY >= navTop) {
    navbar.classList.add('fixed');
    navlogo.classList.add('show');
  } else {
    navbar.classList.remove('fixed');    
    navlogo.classList.remove('show');    
  }
}
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', fixedNav);
})