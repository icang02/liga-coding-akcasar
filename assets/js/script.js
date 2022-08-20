window.addEventListener('scroll', function() {
  let navbar = document.querySelector('header');
  
  if (window.scrollY > 0) {
    navbar.style.transform = "translateY(-60px)"
  } else {
    navbar.style.transform = "translateY(0px)"
  }
});