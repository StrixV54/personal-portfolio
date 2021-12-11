const navbar = document.querySelector('#navbar');
const navlogo = document.querySelector('.logo');
const navmenu = document.querySelector('.menu-icon');
const navlink = document.querySelectorAll('.menu-a');
let item=document.querySelector("header ul");

let navTop = navbar.offsetTop+30;
// console.log(navTop);
function fixedNav() {
  if (window.scrollY >= navTop ) {
    navbar.classList.add('fixed');
    navlogo.classList.add('show');
  } else {
    navbar.classList.remove('fixed');    
    navlogo.classList.remove('show'); 
  }
}
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', fixedNav);
});
for (let i = 0; i < navlink.length; i++){
  navlink[i].addEventListener("click",function(e){
    item.style.display="none";
    navmenu.classList.remove('show');
  });
}
navmenu.addEventListener("click",()=>{
  // console.log("-> "+item);
  if(item.style.display==="none"){
    item.style.display="block";
    navmenu.classList.add('show');
  }
  else{
    item.style.display="none";
    navmenu.classList.remove('show');
  }
});
