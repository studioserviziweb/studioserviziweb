$(document).ready(function(){

  var msh = $('.flex-menu-section-home');

  $('.flex-menu-section-home-content ul li a').click(function(){
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 120
    },'slow','linear');
  })


	$(window).scroll(function () {
    scrollw = $('.flex-quote').height();

		if ($(this).scrollTop() < scrollw) {
			msh.removeClass("fixed");
		} else {
			msh.addClass("fixed");
		}
	});

});
