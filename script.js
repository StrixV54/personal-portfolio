const navbar = document.querySelector('#navbar');
const navlogo = document.querySelector('.logo');
const navmenu = document.querySelector('.menu-icon');
let navTop = navbar.offsetTop+30;
// console.log(navTop);
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
navmenu.addEventListener("click",()=>{
  let item=document.querySelector("header ul");
  // console.log("-> "+item);
  if(item.style.display==="none"){
    item.style.display="block";
    document.querySelector("header").style.background="rgba(39, 37, 75, 0.8)";
    document.querySelector("header").style.height="100vh";
    setTimeout(function(){navmenu.style.transform = 'rotate(90deg)';},100);
  }
  else{
    item.style.display="none";
    document.querySelector("header").style.background="none";
    document.querySelector("header").style.height="80px";
    setTimeout(function(){navmenu.style.transform = 'rotate(0deg)';},100);
  }
});
