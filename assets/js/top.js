//==========================================================================
//top.js
//==========================================================================
$(function(){

  $(window).on('scroll load',function(){
    let headerShowPos = $('.header-show').offset().top;
    let winS = $(window).scrollTop();
    if(winS > headerShowPos){
      $('.js-header').fadeIn();
    }else{
      $('.js-header').fadeOut();
    }
  });
    let mvH;
    let winH;
    mvH = $('.mv__image').outerHeight();
    $('.l-main').css('padding-top',mvH);
    $(window).on('resize',function(){
      mvH = $('.mv__image').outerHeight();
      $('.l-main').css('padding-top',mvH);
    });
    $(window).on('scroll',function(){
      winH = $(window).scrollTop();
      if(winH > 300){
        $('.mv').addClass('scroll');
      }else{
        $('.mv').removeClass('scroll');
      }
    });
    $('.mv__slider').slick({
        dots: false,
        arrows: false,
        speed: 2000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $('.news__slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 768,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
          },
        ]
    });
});

