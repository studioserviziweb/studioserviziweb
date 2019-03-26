var postRequest;
(function($){
$(document).ready(function(){
  var moreBtn = $('.more-btn');
  var clkCounter = 0;
	var spinner = $('.spinner')

  moreBtn.on('click', function(e){
		e.preventDefault();
    e.stopPropagation();

		spinner.removeClass('hidden');

		var catId = $(this).attr('data-cat');
		var termType = $(this).attr('data-tType');

    clkCounter++;

		var data = {
			'action': 'more_news_action',
			'clkCounter': clkCounter,
			'catId': catId,
			'termType': termType
		};


		if (typeof postRequest !== 'undefined') postRequest.abort();
		postRequest = $.post(appData.ajaxurl, data, function(response) {
			var container = $('#news-wrapper');
			container.append(response);
			spinner.addClass('hidden');

		});

  });
});
})(jQuery);
