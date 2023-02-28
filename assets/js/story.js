//==========================================================================
//story.js
//==========================================================================
$(function(){
  $("#photo__slider").on("init", function (event, slick) {
    $(this).append('<div class="slick-num"><span class="now-count"></span><span class="all-count"></span></div>');
    $(".now-count").text(slick.currentSlide + 1);
    $(".all-count").text(slick.slideCount);
  }).slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    fade: true,
    waitForAnimate: false,
		asNavFor:"#thumbnail__slider"
	})
  .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $(".now-count").text(nextSlide + 1);
  });
	$("#thumbnail__slider").slick({
		slidesToShow: 7,
		asNavFor:"#photo__slider",
	});
	$("#thumbnail__slider .slick-slide").on("click",function(){
		let index=$(this).attr("data-slick-index")
		$("#photo__slider").slick("slickGoTo",index)
	});
});

