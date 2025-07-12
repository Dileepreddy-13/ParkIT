const menuIcon = document.getElementById('menu');
const menubar = document.querySelector('.menubar');

menuIcon.addEventListener('click', function() {
    menubar.classList.add('open');
});

document.addEventListener('click', function(e) {
    if (!menubar.contains(e.target) && e.target !== menuIcon) {
        menubar.classList.remove('open');
    }
});

const welcome = document.querySelector('.welcome');
const park=document.getElementById('park-opt');
const remove=document.getElementById('remove-opt');
const stat=document.getElementById('status-opt');

park.addEventListener('click',function(){
    menubar.classList.add("hide");
    welcome.classList.add("hide");
})
remove.addEventListener('click',function(){
    menubar.classList.add("hide");
    welcome.classList.add("hide");
})
stat.addEventListener('click',function(){
    menubar.classList.add("hide");
    welcome.classList.add("hide");
})

document.querySelectorAll('.vehicle').forEach((vehicle) => {
  vehicle.addEventListener('click', function() {
    const card = vehicle.querySelector('.card');
    card.classList.toggle('flipped');
  });
});