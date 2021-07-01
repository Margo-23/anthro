$(function(){
  $('.header__bottom__link').on('click', function(e){
    $('.header__bottom-menu').toggleClass('header__bottom-menu--active');
    $('.header__bottom__inner').css( "display", "none" );
    $('.header__bottom-menu__list').css( "display", "block" );
    $('.logo').css( "display", "none" );
    $('.logo-blue').css( "display", "block" );
    
  });
});


$(function(){
$('.comment__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.comment__slider-prew'),
  nextArrow: $('.comment__slider-next'),
});
});