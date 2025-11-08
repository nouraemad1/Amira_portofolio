// تغيير لون Navbar عند التمرير
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if(window.scrollY > 50){
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scroll عند الضغط على أي رابط
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({behavior:'smooth'});
  });
});
