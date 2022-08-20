let navbar = document.querySelector('header');
let arrowTop = document.querySelector('.arrow-top');
arrowTop.style.display = "none";

window.addEventListener('scroll', function() {
  
  if (window.scrollY > 0) {
    navbar.style.transform = "translateY(-60px)";
    arrowTop.style.display = "block";
  } else {
    navbar.style.transform = "translateY(0px)";
    arrowTop.style.display = "none";
  }
});

const backTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}