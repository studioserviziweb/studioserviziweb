// #require slick/slick.js

var sliderChanging = false;
var slickified = false;

$(document).ready( function(){

	sectorSwipe();

	$('.portfolio-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
		arrows: false,
		infinite: true,
		responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

	$('.flex-breakingnews-slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  	autoplaySpeed: 3000,
		arrows: false,
		responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });



// Slider header
	$('.slider-animate')
		.slick({
			responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        // dots: true
	      }
	    }
	  ]
		})
		.on('beforeChange', function(ev, slick, currentSlide, nextSlide){

			sliderChanging = true;
			$('.slider-data-text-mobile').toggleClass('current', false);
			$('.slider-animate-mobile').slick('slickGoTo', nextSlide)
			$('.navigator-item').toggleClass('current', false);
			$('.navigator-item[data-slide="'+(nextSlide + 1)+'"]').toggleClass('current', true);
		})
		.on('afterChange', function(ev, slick, currentSlide, nextSlide){

			sliderChanging = false;
		});

	$('div[data-slide]').click(function(e) {
		e.preventDefault();
		if (sliderChanging === false) {
			var container = $(this).parent();
			var slideno = $(this).data('slide');
			$('.slider-animate').slick('slickGoTo', slideno - 1);
			$('.slider-animate-mobile').slick('slickGoTo', slideno - 1);
			$('.slider-data-text-mobile', container).toggleClass('current', false);
			$('.navigator-item', container).toggleClass('current', false);
			$(this).toggleClass('current', true);
		}
 });

	$('.slider-animate-mobile')
	.slick({
		responsive: [
	  {
	    breakpoint: 768,
	    settings: {
	      arrows: false,
	      // dots: true
	    }
	  }
	]
	})
	.on('beforeChange', function(ev, slick, currentSlide, nextSlide){

		sliderChanging = true;
		$('.slider-data-text-mobile').toggleClass('current', false);
		$('.slider-animate').slick('slickGoTo', nextSlide);
		$('.navigator-item').toggleClass('current', false);
		$('.navigator-item[data-slide="'+(nextSlide + 1)+'"]').toggleClass('current', true);
	})
	.on('afterChange', function(ev, slick, currentSlide, nextSlide){

		sliderChanging = false;
	});

	$('div[data-slide]').click(function(e) {
	e.preventDefault();
	if (sliderChanging === false) {
		var container = $(this).parent();
		var slideno = $(this).data('slide');
		var slidenomobile = $(this).data('slide');
		$('.slider-animate').slick('slickGoTo', slideno - 1);
		$('.slider-animate-mobile').slick('slickGoTo', slideno - 1);
		 $('.slider-data-text-mobile', container).toggleClass('current', false);
		$('.navigator-item', container).toggleClass('current', false);
		$(this).toggleClass('current', true);
	}
	});

 $('.carousel-slider').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
					arrows: false
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

 $('.tailored-slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 200,
    autoplay: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
    responsive: [
	    {
	      breakpoint: 768,
	      settings: {
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
					arrows: false
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	});

 $('.flex-nu_activity-slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 200,
    autoplay: false,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});

 $('.services-slider').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
					arrows: false
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	$('.sector-slider').slick({
	  centerMode: true,
	  centerPadding: '100px',
	  slidesToShow: 3,
		speed: 350,
	  autoplay: true,
	  autoplaySpeed: 8000,
	  infinite: true,
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        centerMode: false,
	        // centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

  // Reponsive slides
  $(window).resize(function(){
    slickify();
  });

  slickify();



});

function sectorSwipe(){
	// swiper
	// Assign some jquery elements we'll need
	var $swiper = $(".sector-swiper");
	var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
	// into a fixed position for animation purposes
	var $bottomSlideContent = null; // Slide content that gets passed between the
	// panning slide stack and the position 'behind'
	// the stack, needed for correct animation style

	var mySwiper = new Swiper(".sector-swiper", {
		spaceBetween: 1,
		slidesPerView: 3,
	  centeredSlides: true,
	  roundLengths: true,
	  loop: true,
	  loopAdditionalSlides: 30,
		breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 10
	    }
	  },
	  navigation: {
	    nextEl: ".swiper-button-next",
	    prevEl: ".swiper-button-prev"
	  }
	});

};

//slick slider for Whyus on mobile only
function slickify(){
  var $windowWidth = $(window).width();
  var el = $('.flex-whyus-slider');
  var slickOptions = {
    slidesToShow: 1,
    slidesToScroll: 1,
		autoplay: true,
	  autoplaySpeed: 3000,
    arrows: true,
  };

  if ($windowWidth < 768) {
    el.slick(slickOptions);
		slickified = true;
  } else {

		if (typeof el !== 'undefined' && slickified) {
	    el.slick('unslick');
		}
  }
}
