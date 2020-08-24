jQuery(function(){
	function initBox() {
		w_width = jQuery(".banner").width();
		w_height = jQuery(window).height();
		$('.banner').css('height', w_height);
		$('.banner-item,.banner-item figure').css('height', w_height);
		setImgMax($('.banner-item figure img'), 375, 565, w_width, w_height);
	};
	initBox();
	jQuery(window).resize(function () {
		initBox();
	});

	var TOTAL = w_height / 2;
	function b(){
		var s = $(window).scrollTop();
		var alpha =s / TOTAL;
		if(s <= TOTAL && s >= 50){
			if(alpha <= 1){
				$(".header").css({"background-color":"rgba(1,1,1,"+alpha+")"});
			}
		}
	}
	$(window).scroll(b),
	b();
	
	$(".banner").slick({
		centerPadding: '0',
		autoplaySpeed:4000,
		speed:800,
		arrows: false,
		dots: true,
		infinite: true,
		autoplay: true,
		pauseOnHover:false,
		focusOnSelect: false,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
	});

	var flag = 1;
	$(document).on("click", ".consmetic-video-btn", function () {
		if(flag){
			$('.cosmetic-video').trigger('play');
			$(".cosmetic-wrap").addClass('fadeOuts');
			flag = 0;
		}else{
			$('.cosmetic-video').trigger('pause');
			$(".cosmetic-wrap").removeClass('fadeOuts');
			//$(".video-btn span").html("&#xe608;");
			flag = 1;
		}
		
	});

});

