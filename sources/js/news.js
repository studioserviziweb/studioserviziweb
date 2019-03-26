
$(document).ready( function(){

	// trigger
	enableFilters();
});

var enableFilters = function() {
	$('.flex--news').on('click', '.filter ul li a:not(.current)', filterAction);
	// $('.flex--news').on('click', '.filter ul li a span.close', closeAction);
	$('.flex--news').on('click', '.filter ul li a.current,.mob-filter span.selected', closeAction);
	$('.flex--news').on('click', '.filter .mob-filter span.down', showMobCat);
};




// show mobile category
var showMobCat = function (e) {

	e.preventDefault();
	$('.flex--news .filter ul').slideDown({complete:function(){
		if (!$(this).hasClass("mob-show")) {
			$(this).css('display','').toggleClass("mob-show", true);
		}
		else
		{
			$(this).css('display','none').toggleClass("mob-show", false);
		}
	}});

};


// close action
var closeAction = function (e) {

	e.preventDefault();
	// $('.flex--news .filter ul li a').find('span').remove();
	$('.flex--news .filter ul li a').toggleClass("current disabled", false);

	//remove name category to mob-filter and relative class
	$('.mob-filter span.choice').text('').toggleClass("selected", false);


	var categories = [];

	$('.filter ul li a').each(function (){
		categories.push($(this).data('id'));
	});

	$('#news-wrapper').fadeToggle();

	$.ajax({
		url: appData.ajaxurl,
		type: 'POST',
		data: {
			'action' : 'reset-filter-news',
			'category' : categories,
			'post_id' : get_current_page_id()
		},
		success: function(data) {
			if (!$.trim(data)){
				$('.flex--news--content').html(data);
				$('#news-wrapper').fadeToggle();
			}
			else{
				$('.flex--news--content').html(data);
				$('#news-wrapper').fadeToggle();
			}
		}
	});
};


var filterAction = function (e) {

	e.preventDefault();

	var el = $(this);

	$('.flex--news .filter ul li a').toggleClass("current", false);
	$('.flex--news .filter ul li a').toggleClass("disabled", true);
	// $('.flex--news .filter ul li a').find('span').remove();
	el.toggleClass("disabled", false);
	el.toggleClass("current", true);
	// add span .close
	// el.prepend('<span class="close">x</span>');

	//add name category to mob-filter and relative class
	$('.mob-filter span.choice').text(el.text()).toggleClass("selected", true);
	$('.flex--news .filter ul').toggleClass("mob-show", false);

	$('#news-wrapper').fadeToggle();


	$.ajax({
		url: appData.ajaxurl,
		type: 'POST',
		data: {
			'action' : 'load-filter-news',
			'category' : el.data('id')
		},
		success: function(data) {
			if (!$.trim(data)){
				$('.flex--news--content').html('');
				$('#news-wrapper').fadeToggle();
			}
			else{
				$('.flex--news--content').html(data);
				$('#news-wrapper').fadeToggle();
			}
		}
	});

	return false;
};


function get_current_page_id() {
    var page_body = $('body.page');

    var id = 0;

    if(page_body) {
        var classList = page_body.attr('class').split(/\s+/);

        $.each(classList, function(index, item) {
            if (item.indexOf('page-id') >= 0) {
                var item_arr = item.split('-');
                id =  item_arr[item_arr.length -1];
                return false;
            }
        });
    }
    return id;
}
