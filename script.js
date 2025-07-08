// Toggle menubar slide in/out
const menuIcon = document.getElementById('menu');
const menubar = document.querySelector('.menubar');

menuIcon.addEventListener('click', function() {
    menubar.classList.toggle('open');
});

// Optional: click outside to close
document.addEventListener('click', function(e) {
    if (!menubar.contains(e.target) && e.target !== menuIcon) {
        menubar.classList.remove('open');
    }
});
