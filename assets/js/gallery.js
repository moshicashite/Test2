//==========================================================================
//gallery.js
//==========================================================================
$(function(){
  let jsModal = $('.js-modal');
  let jsModalImage = $('.js-modal-image');
  let jsModalClose = $('.js-modal-close');
  const $win = $(window);
  const $body = $('body');
  let scrollPosition;

  jsModal.on('click',function(){
    scrollPosition = $(window).scrollTop();
    $body.addClass('is-locked');
    $body.css({ 'top': -scrollPosition });

    let dataModal = $(this).attr('data-modal');
    let dataSrc = $(this).attr('data-src');
    let dataRate = $(this).attr('data-rate');
    $('.'+dataModal+'').find(jsModalImage).attr('src','').attr('src',dataSrc);
    /*
    if(dataRate == 'high'){
      $('.'+dataModal+'').find('.modal-gallery__outer').addClass('mh100p');
    }else{
      $('.'+dataModal+'').find('.modal-gallery__outer').removeClass('mh100p');
    }
    */
    $('.'+dataModal+'').fadeIn();
    return false;
  });
  jsModalClose.on('click',function(){
    $body.removeClass('is-locked');
    $body.css({ 'top': '' });
    window.scrollTo(0, scrollPosition);
    $('.modal-gallery').fadeOut();
    return false;
  });

  $('.modal-gallery').on('click',function(e){
    if(e.target !== e.currentTarget) return;
    $body.removeClass('is-locked');
    $body.css({ 'top': '' });
    window.scrollTo(0, scrollPosition);
    $('.modal-gallery').fadeOut();
    return false;
  });
});

