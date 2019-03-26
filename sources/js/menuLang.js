$(document).ready(function(){
	languageHide();
});

function languageHide(){
	var mnu_lang = $('li.wpml-ls-item');

	if(typeof(mnu_lang) != "undefined" && mnu_lang !== null) {
		if (!$('body').hasClass('is_translated')){
			mnu_lang.hide();
		}
	}
};
