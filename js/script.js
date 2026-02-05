// Preload functionality with session storage
document.addEventListener('DOMContentLoaded', function() {
  const preloadOverlay = document.getElementById('preload-overlay');

  // Check if user has visited before using session storage
  const hasVisited = sessionStorage.getItem('hasVisited');

  if (hasVisited) {
    // If user has visited before, hide the preload immediately
    preloadOverlay.style.display = 'none';
  } else {
    // If first visit, show preload and set session storage after animation completes
    setTimeout(function() {
      sessionStorage.setItem('hasVisited', 'true');
      preloadOverlay.style.opacity = '0';

      // Hide the preload overlay after fade out animation completes
      setTimeout(function() {
        preloadOverlay.style.display = 'none';
      }, 500); // Match the CSS transition duration
    }, 3000); // Show for 3 seconds (adjust as needed)
  }
});

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