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
  $('.collections__item-name').on('click', function(e){
    e.preventDefault();
    $(this.parentElement).toggleClass('collections__item--active');    
  });
});

$(function(){
  $('.collections__item-submenu__element-link').on('click', function(e){
    e.preventDefault();
    $('.collections__item-submenu__element-link').removeClass('collections__item-submenu__element-link--active');
    $(this).addClass('collections__item-submenu__element-link--active');    
  });
});

$(function(){
  $('.catalog__filters__top').on('click', function(e){
    $(this).children('.catalog__filters__btn').toggleClass('catalog__filters__btn--open'); 
    $(this).next('.catalog__filters__form').toggle();   
  });
});

$(function(){
  $('.color__text').on('click', function(e){
    $(this).toggleClass('color__text--active'); 
  });
});

$(function(){
  $('.material__text').on('click', function(e){
    $(this).toggleClass('material__text--active'); 
  });
});

$(function(){
  $('.price__text').on('click', function(e){
    $(this).toggleClass('price__text--active'); 
  });
});

$(function(){
  $('.catalog__filters__reset').on('click', function(e){
    $('.color__text').removeClass('color__text--active');
    $('.material__text').removeClass('material__text--active');
    $('.price__text').removeClass('price__text--active');
    $('.catalog__filters__btn').removeClass('catalog__filters__btn--open');
    $('.catalog__filters__form').css('display', 'none');
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