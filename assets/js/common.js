//==========================================================================
//common.js
//==========================================================================

//userAgent
//---------------------------------------------------------
function userAgent() {
  const ua = navigator.userAgent;
  if (ua.indexOf('iPhone') != -1 || ua.indexOf('iPod') != -1 || ua.indexOf('Android') != -1 && ua.indexOf('Mobile') != -1) {
    //sp
    $('body').addClass('is-view-sp');
  } else if (ua.indexOf('iPad') != -1 || ua.indexOf('Android') != -1) {
    //tab
    $('body').addClass('is-view-tab');
  } else {
    // pc
    $('body').addClass('is-view-pc');
  }
}


//userAgentIE
//---------------------------------------------------------
function userAgentIE() {
  const ua = window.navigator.userAgent.toLowerCase();
  const uaVersion = window.navigator.appVersion.toLowerCase();
  //ie
  if (ua.indexOf('msie') != -1 || ua.indexOf('trident') !== -1) {
    $('body').addClass('is-view-ie');
  }
}


//menu
//---------------------------------------------------------
function menu() {
  const $menuTrriger = $('.js-btnMenu');
  const $jsMenuClose = $('.js-btnClose');
  const $menuContent = $('.l-header__menuSP');
  const $win = $(window);
  const $body = $('body');
  let scrollPosition;
  
  $menuTrriger.on('click', function(){
    scrollPosition = $(window).scrollTop();
    $body.addClass('is-locked');
    $body.css({ 'top': -scrollPosition });
    $menuContent.fadeIn();
    return false;
  });
  $jsMenuClose.on('click', function(){
    menuClose();
    return false;
  });

  function menuClose() {
    $menuTrriger.removeClass('is-open');
    $body.removeClass('is-locked');
    $body.css({ 'top': '' });
    window.scrollTo(0, scrollPosition);
    $menuContent.fadeOut();
  }

  $('.js-drop-menu').hover(
    function (){
      $(this).find('.drop-menu').addClass('is-open').next().stop().fadeIn();
    },
    function () {
      $(this).find('.drop-menu').removeClass('is-open').next().stop().fadeOut();
    }
  );
  
  $(window).on('scroll load',function(){
    let winS = $(window).scrollTop();
    let footS = $('.l-footer').offset().top - window.innerHeight;
    let headerShowPos = $('.header-show').offset().top - 300;
    
    if(!$('.js-clickMenuSP').find('a').hasClass('is-open') && !$('body').hasClass('is-locked')){
      if(winS > 300){
        $('.click-menu__wrap').addClass('show');
      }else{
        $('.click-menu__wrap').removeClass('show');
      }
    }
    if(winS > footS){
      $('.js-clickMenuSPInner').fadeOut();
    }else{
      $('.js-clickMenuSPInner').fadeIn();
    }
  });
  
  $('.js-clickMenuSP').on('click', function(){
    let winS = $(window).scrollTop();
    if($(this).find('a').hasClass('is-open')){
      $body.removeClass('is-locked');
      $body.css({ 'top': '' });
      window.scrollTo(0, scrollPosition);
      $('.l-nav__subMenuSP').removeClass('is-open');
      $(this).find('a').removeClass('is-open');
      $(this).next().stop().slideUp();
    }else{
      scrollPosition = $(window).scrollTop();
      $body.addClass('is-locked');
      $body.css({ 'top': -scrollPosition });
      $('.l-nav__subMenuSP').addClass('is-open');
      $(this).find('a').addClass('is-open');
      $(this).next().stop().slideDown();
    }
    if(winS < 300){
      $('.click-menu__wrap').removeClass('show');
    }
    return false;
  });
  
  $('.l-nav__subMenuSP__overlay').on('click', function(){
    $body.removeClass('is-locked');
    $body.css({ 'top': '' });
    window.scrollTo(0, scrollPosition);
    $('.l-nav__subMenuSP').removeClass('is-open');
    $('.js-clickMenuSP').find('a').removeClass('is-open');
    $('.js-clickMenuSP').next().stop().slideUp();
  });

}


//pagetop
//---------------------------------------------------------
function pagetop() {
  const pagetopTrigger = $('.js-pagetop');
  $(window).on('scroll', function() {
    scrollPos = $(window).scrollTop();
    winH = window.innerHeight;
    footPos = $('.l-footer').offset().top + 52;
    if (scrollPos + winH  > footPos) {
      pagetopTrigger.removeClass('is-fixed');
    } else {
      pagetopTrigger.addClass('is-fixed');
    }
    if (scrollPos > 0) {
      pagetopTrigger.fadeIn();
    }else{
      pagetopTrigger.fadeOut();
    }
  });
  pagetopTrigger.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
}


// anker
// ---------------------------------------------------
function anker() {
  const headerHeight = $('.l-header__outer').outerHeight();

  $('.js-anker[href^="#"]').click(function () {
    let href = $(this).attr('href');
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - headerHeight;
    $('html, body').animate({
      scrollTop: position
    },500);
    return false;
  });
}


//animation
//---------------------------------------------------------
function scrollAnimation() {
  const animationTarget = $('.js-animate');
  animationTarget.addClass('is-animate');
  $(window).on('load scroll', function(){
    animationTarget.each(function(){
      let targetPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > targetPos - windowHeight + 100){
        $(this).addClass('is-animated');
      }
    });
  });
}


//accordion
//---------------------------------------------------------
function accordion() {
  $('.js-accordion').on('click', function() {
    $(this).toggleClass('is-active').next().stop().slideToggle(500);
    return false;
  });
  $('.js-accordion02').on('click', function() {
    $(this).toggleClass('is-active').parent().prev().stop().slideToggle(500);
    return false;
  });
}

//sprite svg
//---------------------------------------------------------
function spriteSvg() {
  $.ajax({
    type: 'get',
    url: '/assets/images/common/sprite.svg'
  }).done(function(data) {
    var svg = $(data).find('svg');
    $('body').prepend(svg);
  });
}

/**
 * telConvLink
 * set html tag data-tel="****"
 */
 function telConvLink(){var attr='data-tel',el=document.querySelectorAll('['+attr+']');for(var i=0;i<el.length;i++){var v=el[i];v.outerHTML='<a href="tel:'+v.getAttribute(attr).replace(/[\-\x20]/g,'')+'">'+v.outerHTML+'</a>';}}



//init
//---------------------------------------------------------
$(function(){
  userAgent();
  userAgentIE();
  pagetop();
  anker();
  scrollAnimation();
  accordion();
  spriteSvg();
  
  menu();

  if($('body').hasClass('is-view-sp')){
    telConvLink();
  }else if($('body').hasClass('is-view-tab')){
    telConvLink();
  }

});










