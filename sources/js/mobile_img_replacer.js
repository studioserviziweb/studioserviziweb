$(document).ready(function(){

	$(window).resize(function(){
		responsiveImg();
	});

	responsiveImg();

});

function responsiveImg() {
	var $windowWidth = $(window).width();
	var headerSlider = $( ".slider-img-header" );
	var quoteSlider = $( ".quote-img-header" );
	var caseHistoryBg = $( ".flex-showcase-bg" );
	var caseHistoryCont = $( ".flex-showcase-container" );
	var mobDivImg = $( ".mob-img" );


	if ( $windowWidth < 767 ) {

		headerSlider.each(function() {
			var mobImg = $(this).attr('data-mob-image-url');
			if (typeof mobImg !== typeof undefined && mobImg !== false) {
				$(this).css('background-image', 'url('+mobImg+')');
			}
		});

		mobDivImg.each(function() {
			var mobImg = $(this).attr('data-mob-image-url');
			if (typeof mobImg !== typeof undefined && mobImg !== false) {
				$(this).attr('src', mobImg);
			}
		});

	}else{

		headerSlider.each(function() {
			var dkImg = $(this).attr('data-dk-image-url');
			if (typeof dkImg !== typeof undefined && dkImg !== false) {
				$(this).css('background-image', 'url('+dkImg+')');
			}
		});

		mobDivImg.each(function() {
			var dkImg = $(this).attr('data-dk-image-url');
			if (typeof dkImg !== typeof undefined && dkImg !== false) {
				$(this).attr('src', dkImg);
			}
		});
	}

	if ( $windowWidth < 767 ) {

		quoteSlider.each(function() {
			var mobImg = $(this).attr('data-mob-image-url');
			if (typeof mobImg !== typeof undefined && mobImg !== false) {
				$(this).css('background-image', 'url('+mobImg+')');
			}
		});

	}else{

		quoteSlider.each(function() {
			var dkImg = $(this).attr('data-dk-image-url');
			if (typeof dkImg !== typeof undefined && dkImg !== false) {
				$(this).css('background-image', 'url('+dkImg+')');
			}
		});

	}

	if ($windowWidth > 767 && $windowWidth < 1200) {
		caseHistoryCont.each(function() {
			var gradient = $(this).attr('data-gradient');
			console.log(gradient);
			if (typeof gradient !== typeof undefined && gradient !== false) {
				$(this).css('background-image', gradient);
			}
		});
	}else if ($windowWidth < 767) {
		caseHistoryCont.each(function() {
			var gradient = '#f5f5f5';
			if (typeof gradient !== typeof undefined && gradient !== false) {
				$(this).removeAttr('style');
				$(this).css('background-color', gradient);
			}
		});
	}else {
		caseHistoryBg.each(function() {
			var dkImg = $(this).attr('data-dk-image-url');
			if (typeof dkImg !== typeof undefined && dkImg !== false) {
				$(this).css('background-image', 'url('+dkImg+')');
			}
		});
		caseHistoryCont.each(function() {
			var gradient = $(this).attr('data-gradient');
			if (typeof gradient !== typeof undefined && gradient !== false) {
				$(this).css('background-image', gradient);
			}
		});
	}



};
