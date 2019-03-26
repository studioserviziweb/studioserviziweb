$(document).ready(function(){

	$(window).resize(function(){
		responsiveIntImg();
	});

	responsiveIntImg();

	selectImage();
});

function responsiveIntImg() {
	var $windowWidth = $(window).width();
	var image = $( ".flex-intImage-areaImage-image" );
	var items = $('.flex-intImage-areaImage-item');
	var h_control_area = $('.flex-intImage-areaImage-image-fade.active .flex-intImage-areaImage-image.active').height();

	if ( $windowWidth > 991  )
		$('.flex-intImage-control-aree').height(h_control_area);
	else
		$('.flex-intImage-control-aree').height('auto');

	if ( $windowWidth < 767 ) {

		image.each(function() {
			var mobImg = $(this).attr('data-mob-image-url');
			if (typeof mobImg !== typeof undefined && mobImg !== false) {
				$(this).css('background-image', 'url('+mobImg+')');
			}
		});

		items.each(function() {
			var mobX = $(this).attr('data-mob-pos-x');
			var mobY = $(this).attr('data-mob-pos-y');
			if (typeof mobX !== typeof undefined && mobX !== false && typeof mobY !== typeof undefined && mobY !== false) {
				$(this).css({top: mobY+'%', left: mobX+'%'});
			}
		});


	}else{

		image.each(function() {
			var dkImg = $(this).attr('data-dk-image-url');
			if (typeof dkImg !== typeof undefined && dkImg !== false) {
				$(this).css('background-image', 'url('+dkImg+')');
			}
		});

		items.each(function() {
			var dkX = $(this).attr('data-dk-pos-x');
			var dkY = $(this).attr('data-dk-pos-y');
			if (typeof dkX !== typeof undefined && dkX !== false && typeof dkY !== typeof undefined && dkY !== false) {
				$(this).css({top: dkY+'%', left: dkX+'%'});
			}
		});
	}


};

function selectImage() {
	var $windowWidth = $(window).width();
	var selectors = $('.flex-intImage-control');
	var imageArea = $('.flex-intImage-areaImage-image');
	var imageAreaf = $('.flex-intImage-areaImage-image-fade');
	var imageAread = $('.flex-intImage-areaImage-detail');
	var h_control_area = $('.flex-intImage-areaImage-image-fade.active.flex-intImage-areaImage-image.active').height();
	// var imgAreaSection = imageArea.attr('data-section');

	selectors.click(function (){
		var el = $(this);
		elSection = el.attr('data-section')

		if (!el.hasClass('selected')) {
			selectors.removeClass('selected');
			el.addClass('selected');
		}

		imageAreaf.fadeOut('fast', 'linear');
		imageAread.removeClass('active');
		imageArea.removeClass('active');
		imageAreaf.removeClass('active');
		// imageAreaf.fadeOut(1000, 'linear');


		$('.flex-intImage-areaImage-image[data-section=' + elSection + ']').addClass('active');
		$('.flex-intImage-areaImage-detail[data-section=' + elSection + ']').addClass('active');
		$('.flex-intImage-areaImage-image-fade[data-section=' + elSection + ']').fadeIn(1000, 'linear');
		$('.flex-intImage-areaImage-image-fade[data-section=' + elSection + ']').addClass('active');



		if ( $windowWidth > 991  )
			$('.flex-intImage-control-aree').height(h_control_area);
		else
			$('.flex-intImage-control-aree').height('auto');

	});

};
