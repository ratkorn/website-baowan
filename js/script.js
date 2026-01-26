// JavaScript for sticky button functionality
document.addEventListener('DOMContentLoaded', function() {
  const stickyBtn = document.getElementById('sticky-btn');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      stickyBtn.classList.remove('translate-y-20', 'opacity-0');
      stickyBtn.classList.add('translate-y-0', 'opacity-100');
    } else {
      stickyBtn.classList.remove('translate-y-0', 'opacity-100');
      stickyBtn.classList.add('translate-y-20', 'opacity-0');
    }
  });
});