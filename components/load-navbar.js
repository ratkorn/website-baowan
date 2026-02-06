function loadNavbar(elementId, navbarPath = './components/navbar.html'){
    const container = document.getElementById(elementId);
   if(!container){
    console.error(`Element with id "${elementId}" not found`);
    return;
   }

   // Check if we're running locally (file:// protocol) and handle appropriately
   if (window.location.protocol === 'file:') {
       // For local file access, we'll use XMLHttpRequest as fetch doesn't work with file://
       const xhr = new XMLHttpRequest();
       xhr.open('GET', navbarPath, true);
       xhr.onreadystatechange = function() {
           if (xhr.readyState === 4) {
               if (xhr.status === 200 || xhr.status === 0) { // Status 0 means local file loaded
                   container.innerHTML = xhr.responseText;
                   initializeNavbarEvents();
               } else {
                   console.error(`Failed to load navbar: ${xhr.status}`);
                   container.innerHTML = `<p>Error loading navbar: Failed to load file</p>`;
               }
           }
       };
       xhr.onerror = function() {
           console.error('Network error occurred while loading navbar');
           container.innerHTML = `<p>Error loading navbar: Network error</p>`;
       };
       xhr.send();
   } else {
       // For web server (http/https), use fetch as before
       fetch(navbarPath)
       .then(response =>{
        if(!response.ok){
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.text();
       })
       .then(html => {
        container.innerHTML = html;
        // Reinitialize any event listeners or scripts that might be needed after navbar is loaded
        initializeNavbarEvents();
       })
       .catch(error => {
        console.error(`There has been a problem with your fetch operation: `, error);
        container.innerHTML = `<p>Error loading navbar: ${error.message}</p>`;
       });
   }
}

// Initialize any navbar-specific events after it's loaded
function initializeNavbarEvents() {
    // Add any navbar-specific event handlers here if needed
    console.log("Navbar loaded and initialized");
}

// Auto load the navbar when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadNavbar("navbar-placeholder");
});
