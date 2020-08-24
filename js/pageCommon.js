$(document).ready(function() {
	let w_width = 0;
	let w_height = 0;
	function pageBox() {
		w_width = jQuery(window).width();
		w_height = jQuery(window).height();
	}
	pageBox();
	jQuery(window).resize(function() {
		pageBox();
	});
	$(".menubtn").click(function(){
		$(this).toggleClass('active');
		$(".naviges").toggleClass('show');
	});
	$(".navigete-bg").click(function() {
		$(".menubtn").removeClass('active');
		$(".naviges").removeClass('show');
	});
	$(".line__menu span").click(function(e){
		e.preventDefault();
		jQuery("html,body").animate({ scrollTop: 0},320);
	});
	if($("img.lazy").length > 0){
		$("img.lazy").lazyload({
			effect: "fadeIn",
			threshold: 200,
			placeholder: "images/load.gif"
		})
	}

	jQuery(window).scroll(function () {
		var windowTop = jQuery(window).scrollTop();
		if (windowTop < w_height) {
			jQuery('.pbanner figure,.banner').css('transform', "translate3d(0px," + (windowTop) / 2.5 + "px,0)");
		};
	});
	getHash();
	jQuery(".leval-menu-list li a,.block-item-text a").click(function(e){
		var hash=jQuery(this).attr("href").split("#")[1];
		if(hash && jQuery("#"+hash).length==1){
			setScroll("#"+hash);
		}
	});
	
	function getHash(){
		var hash = location.href.split("#")[1];
		if(hash){
			setScroll("#"+hash);
		}
	};
	var scnum=0;
	function setScroll(anchorCur){
		scnum=$('.header').outerHeight();
	    jQuery("html,body").animate({ scrollTop: jQuery(anchorCur).offset().top-scnum},500);
	};
});

setPopUp($('.weix'), "微信公众号");

function setPopUp(obj, title) {
	obj.click(function() {
		var str = '<div class="popUpblack"><div class="popUp"><div class="t">' + title +
			'<span class="close">关闭</span></div><div class="img"><img src="' + obj.attr("href") + '"/></div></div></div>';
		$("body").append(str);
		jQuery(".popUpblack").fadeIn();
		jQuery(".popUp").animate({
			marginTop: "-127"
		}, 400);
		$(".popUp .close").click(function() {
			$(".popUpblack").remove();
		});
		jQuery(".popUpblack").click(function() {
			$(".popUpblack").remove();
		});
		return false;
	});
};

function setImgMax(img, imgW, imgH, tW, tH) {
	var tWidth = tW || w_width;
	var tHeight = tH || w_height;
	var coe = imgH / imgW;
	var coe2 = tHeight / tWidth;
	if (coe < coe2) {
		var imgWidth = tHeight / coe;
		img.css({
			height: tHeight,
			width: imgWidth,
			left: -(imgWidth - tWidth) / 2,
			top: 0
		});
	} else {
		var imgHeight = tWidth * coe;
		img.css({
			height: imgHeight,
			width: tWidth,
			left: 0,
			top: -(imgHeight - tHeight) / 2
		});
	};

};
