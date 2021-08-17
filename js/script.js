let navigationNav = document.getElementById('nav-box');
let burggerButton = document.getElementById('burger-menu');

burggerButton.addEventListener('click', function(){
    navigationNav.classList.toggle("active");
});
