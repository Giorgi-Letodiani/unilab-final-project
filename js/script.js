let navigationNav = document.getElementById('nav-box');
let burggerButton = document.getElementById('burger-menu');

burggerButton.addEventListener('click', function(){
    navigationNav.classList.toggle("active");
});
$(function(){
    $('.single-item').slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});