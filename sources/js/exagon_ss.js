$(document).ready( function(){
		imgToSvg();
		hex();
});

function hex(){
    $(".flex-hexagons-comp__hex").on("mouseenter", function(i) {
      $(this).addClass("flex-hexagons-comp__hex--active");
    }).on("mouseleave", function(i) {
      $(this).removeClass("flex-hexagons-comp__hex--active");
    });

    $(".flex-hexagons-comp-overlay__slides").slick({
      arrows: true,
      prevArrow: '<a href="#" class="slick-prev">Previous</a>',
      nextArrow: '<a href="#" class="slick-next">Next</a>',
      dots: true,
      adaptiveHeight: true,
      mobileFirst: true
    });

    $(".flex-hexagons-comp__hex").on("click", function(i) {
      var t = $(this).data("hex-num");

      $(".flex-hexagons-comp-overlay__slides").slick("slickGoTo", parseInt(t), true);

      $(".flex-hexagons-comp-overlay").addClass("flex-hexagons-comp-overlay--active")
    });

    $(".flex-hexagons-comp-overlay__close").on("click", function(i) {
      i.preventDefault(), $(".flex-hexagons-comp-overlay").removeClass("flex-hexagons-comp-overlay--active")
    });
};

function imgToSvg(){
    $('img.toSvg').each(function(){
        var img = $(this);
        var imgID = img.attr('id');
        var imgClass = img.attr('class');
        var imgURL = img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var svgCode = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                svgCode = svgCode.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                svgCode = svgCode.attr('class', imgClass+' flex-hexagons-comp__hex-icon');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            svgCode = svgCode.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if(!svgCode.attr('viewBox') && svgCode.attr('height') && svgCode.attr('width')) {
                svgCode.attr('viewBox', '0 0 ' + svgCode.attr('height') + ' ' + svgCode.attr('width'))
            }

            // Replace image with new SVG
            img.replaceWith(svgCode);

        }, 'xml');

    });

};
