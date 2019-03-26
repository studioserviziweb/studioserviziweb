$(document).ready( function(){

	enableActionSupport();
});

var enableActionSupport = function(){
	$('.btn-call a.btn').on('click', '', openActionCall);
	$('.btn-contact a.btn').on('click', '', openActionContact);
};

var openActionContact = function (e) {
	e.preventDefault();
	if ($('.btn-call a.btn').hasClass('disable')) {
		$('.callnow').fadeToggle("slow","linear");
		$('.btn-call a.btn').removeClass('disable')
	}

	if ($('.btn-contact a.btn').hasClass('disable'))
		$('.btn-contact a.btn').removeClass('disable');
	else
		$('.btn-contact a.btn').addClass('disable');

	$('.contactnow').fadeToggle("slow","linear");
};

var openActionCall = function (e) {
	e.preventDefault();
	if ($('.btn-contact a.btn').hasClass('disable')) {
		$('.contactnow').fadeToggle("slow","linear");
		$('.btn-contact a.btn').removeClass('disable')
	}

	if ($('.btn-call a.btn').hasClass('disable'))
		$('.btn-call a.btn').removeClass('disable');
	else
		$('.btn-call a.btn').addClass('disable');

	$('.callnow').fadeToggle("slow","linear");
};
