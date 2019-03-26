$(document).ready(function(){
	var menu = $('#header-menu-mobile');

	$('#icon-menu').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('icon-menu').toggleClass('icon-cancel')
		$('.top-search').toggle();
		$('.header-strips-mobile').toggle();
		menu.toggleClass('collapsed');
	});

	var menuBlocks = $('.header-menu-mobile-ul');
	var menuBlocksli = $('li.header-menu-mobile-li:not(.linked)');
	var menuBrcr = $('.header-menu-mobile-brcr');
	var menuTglsub = $('.header-menu-mobile .toggle-submenu');

	menuBlocksli.on('click', function(){
		var ref = $(this).attr('ref');
		var name = $(this).text();
		$('ul.active').removeClass('active');
		var blockId = menu.find('#' + ref );
		blockId.addClass('active');
		menuBrcr.append('<span ref="' + ref + '">' + name + '</span>');
	});

	 menuBrcr.on('click', 'span', function(){
		var ref = $(this).attr('ref');
		$('ul.active').removeClass('active');
		var blockId = menu.find('#' + ref );
		blockId.addClass('active');
		$(this).nextAll().remove();

	});


	menuTglsub.on('click',"> a", function(e){

		e.preventDefault();

		$(this).parent().toggleClass('active',(!$(this).parent().hasClass('active')));

		// var ref = $(this).attr('href');
		// $('ul.active').removeClass('active');
		// var blockId = menu.find('#' + ref );
		// blockId.addClass('active');
		// $(this).nextAll().remove();

	});



	$(window).resize(function(){
		searchDisabled();
	});

	searchDisabled();

});

function searchDisabled(){
	var $windowWidth = $(window).width();
	var button = $('#topsearch-btn');
	var input = $('#topsearch-in');

		if ( $windowWidth < 992 ){

			// button.prop('disabled', true);

			button.on('click', function(e){
				e.preventDefault();

				if ($('#topsearch-in').hasClass('open'))
					$('#topsearch').submit();

				input.toggleClass('open');
			});

		}
};
