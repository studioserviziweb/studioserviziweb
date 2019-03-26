var city = '';
var answers = {};
$(document).ready(function(){

	$('.configurator').each(function(){initConfigurator(this)});
});

var initConfigurator = function (configurator) {

	// var init
	configurator = $(configurator);
	// var steps = $('.configurator--question-group-labels label', configurator);
	var steps = $('.configurator--questions .question', configurator);

	// console.log('steps',steps.length);

	steps.each(function() {

		var progressAmount = Math.ceil(100 / steps.length);

		var step = $(this);
		step.data('progressAmount', progressAmount);
	});

	configurator.data('steps', steps.length);

	// $('.configurator--question-group-labels', configurator).on('click', 'label:not(.off):not(.on)', handleStepClick);

	$('.configurator--questions', configurator).on('change', '.answer input', handleAnswerClick);

}

var count = 1;

var handleAnswerClick = function (e) {

	e.preventDefault();

	var el = $(this);
	var currentQ = el.closest('.question');
	var nextQ = currentQ.next('.question');
	// console.log('answered');

	var item = 'answer' + count;

	if (el.attr('data-type') == "cap") {
	// if (count == 3) {
		var item = 'cap';

	}


	answers[item] = el.val();

	if (answers.cap !== undefined ) {
		$.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + answers.cap +',+italy&key=AIzaSyBVDLI9lNYAdqUpU9a_aVN6C0IgPLZ3DjU', function(results){

			for (var i = 0; i < results.results["0"].address_components.length; i++) {
				if (results.results["0"].address_components[i].types["0"] == 'administrative_area_level_3') {

					city = results.results["0"].address_components[i].long_name;
					answers.city = city;
					break;
				}
				else if(results.results["0"].address_components[i].types["0"] == 'administrative_area_level_2') {
					city = results.results["0"].address_components[i].long_name;
					answers.city = city;
					break;
				}
				else if(results.results["0"].address_components[i].types["0"] == 'administrative_area_level_1') {
					city = results.results["0"].address_components[i].long_name;
					answers.city = city;
					break;
				}
				else if(results.results["0"].address_components[i].types["0"] == 'country') {
					city = results.results["0"].address_components[i].long_name;
					answers.city = city;
					break;
				}

			}

		});

	}
	count = ++count;


	// console.log('domanda',count);

	// console.log(answers);

	currentQ.toggleClass('on', false);

	//color time-track-bar-bg in progress

	$(".time-track-bar-bg").eq(count-2).toggleClass('passed', true);

	if (nextQ.length) {

		nextQ.toggleClass('on', true);

	} else {

		// go to next group
		var currentG = el.closest('.configurator--question-group');
		var nextG = currentG.next('.configurator--question-group');

		changeQuestionGroup(currentG, nextG);
	};


	return false;
}

var changeQuestionGroup = function (currentG, nextG) {

	var groupId = $('.configurator--questions', currentG).attr('id');
	var lastStep = $('.configurator--question-group-labels label[data-label="'+ groupId +'"]');

	var timeTrack = $('.time-track');
	var secs = $('.secs', timeTrack);
	// var watchProgress = $('.time-track-bar .pie', timeTrack);

	currentG.toggleClass('on', false);

	lastStep.toggleClass('off', true);
	lastStep.toggleClass('on', false);

	if (nextG.length) {

		nextG.toggleClass('on', true);

		var nextStep = lastStep.next('label');

		// var currentProgress = watchProgress.data('progress');

		// var progress = currentProgress + lastStep.data('progressAmount');
		// var secsProgress = (60 * progress) / 100;
		// secsProgress = Math.ceil(secsProgress);

		// secs.html(secsProgress);
		// watchProgress.data('progress', progress);
		// watchProgress.attr('data-progress', progress);	// for css purposes

		nextStep.toggleClass('on', true);

	} else {

		// close configuration

		// var progress = 100;
		// var secsProgress = 60;

		// secs.html(secsProgress);
		// watchProgress.data('progress', progress);
		// watchProgress.attr('data-progress', progress);	// for css purposes

		var esitDom = $('.configurator--esit');
		var esitSubtitle = $('#contacts-subtitle');

		$.each(answers, function(key, value){
			// console.log(key);
			// console.log(value);
			esitSubtitle.text(function(){
				return $(this).text().replace('{' + key + '}', value);
			});

			var resultP = $('.configurator--results-value').children('p');
			var resultH = $('.hidden-fields').children('input.answer');


			// console.log('resultP',resultP,'resultH',resultH);


			resultP.text(function(){
				return $(this).text().replace('{' + key + '}', value);
			});
			resultH.val(function(){
				// console.log('resultH',key,value);
				return $(this).val().replace('{' + key + '}', value).replace('"','\"');
			});

		});



		$('.configurator--question-group-labels').hide();
		$('.configurator--question-groups').hide();
		$('.time-track').hide();
		esitDom.toggleClass('on', true);
	}

	return false;
}
