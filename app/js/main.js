$(function(){
  $('.header__bottom__link').on('click', function(e){
    $('.header__bottom-menu').toggleClass('header__bottom-menu--active');
    $('.header__bottom__inner').css( "display", "none" );
    $('.header__bottom-menu__list').css( "display", "block" );
    $('.logo').removeClass("logo--inversion");   
  });

  $(document).on('mouseup', function(e){
    var element = $(".header__bottom-menu");
    if (!element.is(e.target) && element.has(e.target).length === 0 && ($(window).width() > '768')) { 
      $('.header__bottom-menu').removeClass('header__bottom-menu--active');
      $('.header__bottom__inner').css( "display", "block" );
      $('.header__bottom-menu__list').css( "display", "none" );
      $('.logo').addClass("logo--inversion"); 
   
    };
  });

  $('.menu__btn').on('click', function(e){
    $('.site-navigation').css( "display", "block" );
    $(this).css( "display", "none" );
    $('.menu__btn-close').css( "display", "block" );    
  });

  $('.menu__btn-close').on('click', function(e){
    $('.site-navigation').css( "display", "none" );
    $(this).css( "display", "none" );
    $('.menu__btn').css( "display", "block" );    
  }); 

  $('.footer__item-btn').on('click', function(e){
    $(this).next('.footer__item-list').toggle();
    $(this).toggleClass('footer__item-btn--open');
  });
  

  $('.collections__item-name').on('click', function(e){
    e.preventDefault();
    $(this.parentElement).toggleClass('collections__item--active');    
  });


  $('.collections__item-submenu__element-link').on('click', function(e){
    e.preventDefault();
    $('.collections__item-submenu__element-link').removeClass('collections__item-submenu__element-link--active');
    $(this).addClass('collections__item-submenu__element-link--active');    
  });

 
  $('.catalog__filters__top').on('click', function(e){
    $(this).children('.catalog__filters__btn').toggleClass('catalog__filters__btn--open'); 
    $(this).next('.catalog__filters__form').toggle();   
  });


  $('.color__text').on('click', function(e){
    $(this).toggleClass('color__text--active'); 
  });



  $('.material__text').on('click', function(e){
    $(this).toggleClass('material__text--active'); 
  });


  $('.price__text').on('click', function(e){
    $(this).toggleClass('price__text--active'); 
  });


  $('.catalog__filters__reset').on('click', function(e){
    $('.color__text').removeClass('color__text--active');
    $('.material__text').removeClass('material__text--active');
    $('.price__text').removeClass('price__text--active');
    $('.catalog__filters__btn').removeClass('catalog__filters__btn--open');
    $('.catalog__filters__form').css('display', 'none');
  });

  $('.comment__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.comment__slider-prew'),
    nextArrow: $('.comment__slider-next'),
  });

  $(".product__rating-link, .product__details-link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;		
		$('body,html').animate({scrollTop: top}, 1200);
	});
  

  $(".product__rating-stars").rateYo({ 
    starWidth: "15px",
    normalFill: "#9C9FA6",
    ratedFill: "#2A364E",
    readOnly: true,
    spacing: "6px",
    starSvg: '<svg width="15" height="15" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1555 5.13566C14.1101 4.9966 13.9909 4.89727 13.8461 4.87456L9.53241 4.26156L7.59123 0.359333C7.52596 0.228786 7.39257 0.146484 7.24784 0.146484C7.1031 0.146484 6.96971 0.228786 6.90444 0.362171L4.9888 4.27575L0.675067 4.91713C0.53033 4.93984 0.411134 5.03917 0.365727 5.17823C0.320319 5.31729 0.360051 5.47054 0.465056 5.56987L3.59535 8.60367L2.87167 12.9004C2.84612 13.0451 2.90572 13.1899 3.02492 13.275C3.09019 13.3232 3.16965 13.3488 3.24912 13.3488C3.31155 13.3488 3.37115 13.3346 3.42791 13.3034L7.27905 11.2629L11.1415 13.2807C11.1983 13.309 11.2579 13.3232 11.3175 13.3232C11.5275 13.3232 11.7006 13.1501 11.7006 12.9401C11.7006 12.9089 11.6978 12.8805 11.6893 12.8521L10.9429 8.58097L14.0533 5.53014C14.164 5.42797 14.2009 5.27472 14.1555 5.13566ZM8.97905 7.62656C8.7427 7.62656 10.1369 8.39082 10.1596 8.5157L8.55435 4.26156L7.14231 10.1604C7.03163 10.1008 7.61346 9.74597 7.49995 9.80273L6.11794 5.48073L4.38147 8.52989C4.40134 8.40501 4.91231 8.61786 4.8215 8.52989L7.45501 7.62656L5.30098 5.00227C5.42585 4.98241 5.08051 5.68339 5.13443 5.56987L7.27905 10.8453L8.93644 4.78375C8.9932 4.89727 9.10104 4.97389 9.22591 4.99376L7.19085 3.69253L8.97905 7.62656Z"/></svg>',
  });

  $(".product__reviews-stars").rateYo({ 
    starWidth: "20px",
    normalFill: "#9C9FA6",
    ratedFill: "#2A364E",
    readOnly: true,
    spacing: "6px",
    starSvg: '<svg width="15" height="20" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1555 5.13566C14.1101 4.9966 13.9909 4.89727 13.8461 4.87456L9.53241 4.26156L7.59123 0.359333C7.52596 0.228786 7.39257 0.146484 7.24784 0.146484C7.1031 0.146484 6.96971 0.228786 6.90444 0.362171L4.9888 4.27575L0.675067 4.91713C0.53033 4.93984 0.411134 5.03917 0.365727 5.17823C0.320319 5.31729 0.360051 5.47054 0.465056 5.56987L3.59535 8.60367L2.87167 12.9004C2.84612 13.0451 2.90572 13.1899 3.02492 13.275C3.09019 13.3232 3.16965 13.3488 3.24912 13.3488C3.31155 13.3488 3.37115 13.3346 3.42791 13.3034L7.27905 11.2629L11.1415 13.2807C11.1983 13.309 11.2579 13.3232 11.3175 13.3232C11.5275 13.3232 11.7006 13.1501 11.7006 12.9401C11.7006 12.9089 11.6978 12.8805 11.6893 12.8521L10.9429 8.58097L14.0533 5.53014C14.164 5.42797 14.2009 5.27472 14.1555 5.13566ZM8.97905 7.62656C8.7427 7.62656 10.1369 8.39082 10.1596 8.5157L8.55435 4.26156L7.14231 10.1604C7.03163 10.1008 7.61346 9.74597 7.49995 9.80273L6.11794 5.48073L4.38147 8.52989C4.40134 8.40501 4.91231 8.61786 4.8215 8.52989L7.45501 7.62656L5.30098 5.00227C5.42585 4.98241 5.08051 5.68339 5.13443 5.56987L7.27905 10.8453L8.93644 4.78375C8.9932 4.89727 9.10104 4.97389 9.22591 4.99376L7.19085 3.69253L8.97905 7.62656Z"/></svg>',
  });

  $('.product__input').styler();
  $('.product__select').styler();

  $('.cart__card-input').styler();

});

$(function(){
  var containerEl = document.querySelector('.blog-page__inner');
  var mixer;
  if (containerEl) {
    mixer = mixitup(containerEl);
  };
});

