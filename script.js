$('.menu, .gnav__menu__item').on('click',function(){
    $('.menu__line').toggleClass('active');
    $('.gnav').fadeToggle();
});