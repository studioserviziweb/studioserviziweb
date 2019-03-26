(function($){
$(document).ready(function(){


	$( "body" ).on( "submit", "#strip_form", function( event ) {

		// console.log('form_sender',7);
		
		event.preventDefault();
		event.stopPropagation();

		var form = $(this);
		var message = $('.message', form);
		var spinner = $('.spinner', form);

		message.addClass('hidden');
		spinner.removeClass('hidden');

		// $(this).find('input.form-check-input').each(function(){
		// 	if ($(this)[0].checked) {
    //         $(this).attr('type', 'hidden');
    //         $(this).val(1);
    //     } else {
    //         $(this).attr('type', 'hidden');
    //         $(this).val(0);
    //     }
		// })


		pagina=form.find('input[name="type"]').val();
		// console.log('pagina',pagina);

		if (pagina=="aziende") {
			if (form.find('input[name="ss_cc"]').val()=="ss_cc") {
				pagina+=" SSS";
			} else {
				pagina+=form.find('input[name="numdip"]:checked').val();
			}
		}

		var formData = form.serializeArray();
		// console.log( formData );

		var data = {
			'action': 'strip_form_action',
			'page': window.location.href,
			'formData': formData
		};

		$.post(appData.ajaxurl, data, function(response) {

			spinner.addClass('hidden');


			switch (response) {
				case false:
					$('#message-error', message).remove();
					message.append('<i id="message-error">L\'invio non è andato a buon fine</i>').addClass('red').removeClass('hidden');
					// console.log(50,pagina);
					sendTMLead('event','richiesta contatto',pagina,'ko' );
					break;

				case 'no_captcha0':
					$('#message-error', message).remove();
					message.append('<i id="message-error">Prima di inviare esegui la verifica reCaptcha</i>').addClass('red').removeClass('hidden');
					// console.log(57,pagina);
					sendTMLead('event','richiesta contatto',pagina,'ko' );
					break;

				case 'sent0':
					$('input', form).prop('checked', false).not('[type="hidden"]').val('');
					$('textarea', form).val('');
					$('#message-error', message).remove();
					message.removeClass('red').append('<i id="message-error">Messaggio inviato correttamente</i>').removeClass('hidden');
					// console.log(66,pagina);
					sendTMLead('event','richiesta contatto',pagina,'ok' );
					break;
				default:

			}


		});

		grecaptcha.reset();

		return false;
	});

	$( "body" ).on( "submit", "#strip_form2", function( event ) {

	//	console.log('form_sender',80);

		event.preventDefault();
		event.stopPropagation();

		var form = $(this);
		var message = $('.message', form);
		var spinner = $('.spinner', form);

		message.addClass('hidden');
		spinner.removeClass('hidden');

		var formData = form.serializeArray();

		pagina=form.find('input[name="type"]').val();
		// console.log('pagina',pagina);

		if (pagina=="aziende") {
			if (form.find('input[name="ss_cc"]').val()=="ss_cc") {
				pagina+=" SSS";
			} else {
				pagina+=$('input[name="numdip2"]:checked').val();
			}
		}

		var data = {
			'action': 'strip_form_action',
			'page': window.location.href,
			'formData': formData
		};

		$.post(appData.ajaxurl, data, function(response) {

			spinner.addClass('hidden');


			switch (response) {
				case false:
					$('#message-error', message).remove();
					message.append('<i id="message-error">L\'invio non è andato a buon fine</i>').addClass('red').removeClass('hidden');
					sendTMLead('event','richiesta contatto',pagina,'ko' );
					break;

				case 'no_captcha0':
					$('#message-error', message).remove();
					message.append('<i id="message-error">Prima di inviare esegui la verifica reCaptcha</i>').addClass('red').removeClass('hidden');
					sendTMLead('event','richiesta contatto',pagina,'ko' );
					break;

				case 'sent0':
					$('input', form).prop('checked', false).not('[type="hidden"]').val('');
					$('textarea', form).val('');
					$('#message-error', message).remove();
					message.removeClass('red').append('<i id="message-error">Messaggio inviato correttamente</i>').removeClass('hidden');
					sendTMLead('event','richiesta contatto',pagina,'ok' );
					break;
				default:

			}


		});

		grecaptcha.reset();

		return false;
	});

	$( "body" ).on( "submit", "#strip_form-priv", function( event ) {

		//console.log('form_sender',136);

		event.preventDefault();
		event.stopPropagation();

		var form = $(this);
		var message = $('.message', form);
		var spinner = $('.spinner', form);

		message.addClass('hidden');
		spinner.removeClass('hidden');

		var formData = form.serializeArray();
		// console.log( formData );

		var data = {
			'action': 'strip_form_action',
			'page': window.location.href,
			'formData': formData
		};

		// console.log(data);
		$.post(appData.ajaxurl, data, function(response) {
			// console.log(response);

			spinner.addClass('hidden');


			switch (response) {
				case false:
					$('#message-error', message).remove();
					message.append('<i id="message-error">L\'invio non è andato a buon fine</i>').addClass('red').removeClass('hidden');
					sendTMLead('event','richiesta contatto','privati','ko' );
					break;

				// case 'no_captcha0':
				// 	$('#message-error', message).remove();
				// 	message.append('<i id="message-error">Prima di inviare esegui la verifica reCaptcha</i>').addClass('red').removeClass('hidden');
				// 	break;

				case 'sent0':
					$('input', form).prop('checked', false).not('[type="hidden"]').val('');
					$('textarea', form).val('');
					$('#message-error', message).remove();
					message.removeClass('red').append('<i id="message-error">Messaggio inviato correttamente</i>').removeClass('hidden');
					sendTMLead('event','richiesta contatto','privati','ok' );
					break;
				default:

			}


		});

		grecaptcha.reset();

		return false;
	});

	$( "body" ).on( "submit", "#strip_form-nu", function( event ) {

		// console.log('form_sender',197);
		
		event.preventDefault();
		event.stopPropagation();

		var form = $(this);
		var message = $('.message', form);
		var spinner = $('.spinner', form);

		message.addClass('hidden');
		spinner.removeClass('hidden');

		var formData = form.serializeArray();
		// console.log( formData );

		var data = {
			'action': 'strip_form_action',
			'page': window.location.href,
			'formData': formData
		};

		// console.log(data);
		$.post(appData.ajaxurl, data, function(response) {
			// console.log(response);

			spinner.addClass('hidden');


			switch (response) {
				case false:
					$('#message-error', message).remove();
					message.append('<i id="message-error">L\'invio non è andato a buon fine</i>').addClass('red').removeClass('hidden');
					sendTMLead('event','richiesta contatto','negozi uffici','ko' );
					break;

				// case 'no_captcha0':
				// 	$('#message-error', message).remove();
				// 	message.append('<i id="message-error">Prima di inviare esegui la verifica reCaptcha</i>').addClass('red').removeClass('hidden');
				// 	break;

				case 'sent0':
					$('input', form).prop('checked', false).not('[type="hidden"]').val('');
					$('textarea', form).val('');
					$('#message-error', message).remove();
					message.removeClass('red').append('<i id="message-error">Messaggio inviato correttamente</i>').removeClass('hidden');
					sendTMLead('event','richiesta contatto','negozi uffici','ok' );
					break;
				default:

			}


		});

		grecaptcha.reset();

		return false;
	});

	$( "body" ).on( "submit", "#strip_form-aziende", function( event ) {
		
		//console.log('form_sender',258);

		event.preventDefault();
		event.stopPropagation();

		var form = $(this);
		var message = $('.message', form);
		var spinner = $('.spinner', form);
		message.addClass('hidden');
		spinner.removeClass('hidden');

		var formData = form.serializeArray();
		// console.log( formData );

		var data = {
			'action': 'strip_form_action',
			'page': window.location.href,
			'formData': formData
		};

		// console.log(data);
		$.post(appData.ajaxurl, data, function(response) {
			// console.log(response);

			spinner.addClass('hidden');


			switch (response) {
				case false:
					$('#message-error', message).remove();
					message.append('<i id="message-error">L\'invio non è andato a buon fine</i>').addClass('red').removeClass('hidden');
					sendTMLead('event','richiesta contatto','aziende','ko' );
					break;

				// case 'no_captcha0':
				// 	$('#message-error', message).remove();
				// 	message.append('<i id="message-error">Prima di inviare esegui la verifica reCaptcha</i>').addClass('red').removeClass('hidden');
				// 	break;

				case 'sent0':
					$('input', form).prop('checked', false).not('[type="hidden"]').val('');
					$('textarea', form).val('');
					$('#message-error', message).remove();
					message.removeClass('red').append('<i id="message-error">Messaggio inviato correttamente</i>').removeClass('hidden');

					sendTMLead('event','richiesta contatto','aziende','ok' );
					break;
				default:

			}


		});

		grecaptcha.reset();

		return false;
	});

	$( "body" ).on( "submit", "#quote_call_form", function( event ) {

		//console.log('form_sender',319);

		event.preventDefault();
		event.stopPropagation();

		var form = $(this);
		var message = $('.message', form);
		var spinner = $('.spinner', form);
		var canale = $('input[name="canale"]', form);

		var page = window.location.pathname.replace(/[/]/g, '');

		canale.val(page);



	  // console.log(message);
	  // console.log(spinner);

	  message.addClass('hidden');
	  spinner.removeClass('hidden');

	  var formData = form.serialize();

	  // console.log( formData );

		$.ajax({
	    method: "GET",
	    url: "http://server88/WS_HelloWorld/Service1.asmx",
	    data: formData,
	    headers: {input: 'abcd'},
	    success: function(response) {
	      // console.log(response);

	      spinner.addClass('hidden');


	      switch (response) {
	        case false:
	          $('#message-error', message).remove();
	          message.append('<i id="message-error">L\'invio non è andato a buon fine</i>').addClass('red').removeClass('hidden');
	          break;

	        case 'abcd_done':
	          $('input', form).prop('checked', false).not('[type="hidden"]').val('');
	          $('#message-error', message).remove();
	          message.removeClass('red').append('<i id="message-error">Messaggio inviato correttamente</i>').removeClass('hidden');
	          break;

	        default:

	      }


	    }
	  });

		return false;
	});

	$( "body" ).on( "submit", "#quote_call_form2", function( event ) {

		//console.log('form_sender',381);

		event.preventDefault();
	  event.stopPropagation();

	  var form = $(this);
	  var message = $('.message', form);
	  var spinner = $('.spinner', form);
		var canale = $('input[name="canale"]', form);

		var page = window.location.pathname.replace(/[/]/g, '');

		canale.val(page);


	  // console.log(message);
	  // console.log(spinner);

	  message.addClass('hidden');
	  spinner.removeClass('hidden');

	  var formData = form.serialize();

	  // console.log( formData );

		$.ajax({
	    method: "GET",
	    url: "http://server88/WS_HelloWorld/Service1.asmx",
	    data: formData,
	    headers: {input: 'abcd'},
	    success: function(response) {
	      // console.log(response);

	      spinner.addClass('hidden');


	      switch (response) {
	        case false:
	          $('#message-error', message).remove();
	          message.append('<i id="message-error">L\'invio non è andato a buon fine</i>').addClass('red').removeClass('hidden');
	          break;

	        case 'abcd_done':
	          $('input', form).prop('checked', false).not('[type="hidden"]').val('');
	          $('#message-error', message).remove();
	          message.removeClass('red').append('<i id="message-error">Messaggio inviato correttamente</i>').removeClass('hidden');
	          break;

	        default:

	      }


	    }
	  });

		return false;
	});

	$( "body" ).on( "submit", "#config-call-me-form2", function( event ) {

		//console.log('form_sender',442);

		event.preventDefault();
		event.stopPropagation();

		var form = $(this);
		var message = $('.message', form);
		var spinner = $('.spinner', form);

		message.addClass('hidden');
		spinner.removeClass('hidden');

		var formData = form.serializeArray();
	//	console.log( formData );

		pagina=$('form#config-call-me-form2 input[name="pagina"]').val();


		var data = {
			'action': 'configurator_callme_form_action',
			'page': window.location.href,
			'formData': formData
		};

	//	console.log(data);
	//	console.log(appData.ajaxurl);
		$.post(appData.ajaxurl, data, function(response) {
			// console.log(response);

			spinner.addClass('hidden');


			switch (response) {
				case false:
					$('#message-error', message).remove();
					message.append('<i id="message-error">L\'invio non è andato a buon fine</i>').addClass('red').removeClass('hidden');
					sendTMLead('event','preventivatore',pagina,'ko' );
					break;

				case 'no_captcha0':
					$('#message-error', message).remove();
					message.append('<i id="message-error">Prima di inviare esegui la verifica reCaptcha</i>').addClass('red').removeClass('hidden');
					sendTMLead('event','preventivatore',pagina,'ko' );
					break;

				case 'sent0':
					$('input', form).prop('checked', false).not('[type="hidden"]').val('');
					$('textarea', form).val('');
					$('#message-error', message).remove();
					message.removeClass('red').append('<i id="message-error">Messaggio inviato correttamente</i>').removeClass('hidden');
					sendTMLead('event','preventivatore',pagina,'ok' );
					break;
				default:

			}


		});

		grecaptcha.reset();

		return false;
	});

	$( "body" ).on( "submit", "#call-me-formofseprb2, #call-me-formofsenub2, #call-me-formofseazb2, #call-me-form2 ", function( event ) {

		//console.log('form_sender',526);

		event.preventDefault();
		event.stopPropagation();

		var form = $(this);
		var message = $('.message', form);
		var spinner = $('.spinner', form);

		message.addClass('hidden');
		spinner.removeClass('hidden');

		var formData = form.serializeArray();
	//	console.log( formData );

		pagina = form.find('input[name="pagina"]').val();

		external=form.find('input[name="external"]').val();

		var data = {
			'action': 'contact_callme_form_action',
			'page': window.location.href,
			'formData': formData
		};

	//	console.log(data);
	//	console.log(appData.ajaxurl);
		$.post(appData.ajaxurl, data, function(response) {
			// console.log(response);

			spinner.addClass('hidden');


			switch (response) {
				case false:
					$('#message-error', message).remove();
					message.html('<i id="message-error">L\'invio non è andato a buon fine</i>').addClass('red').removeClass('hidden');
					sendTMLead('event','richiamami',pagina,'ko' );
					break;

				case 'no_captcha0':
					$('#message-error', message).remove();
					message.html('<i id="message-error">Prima di inviare esegui la verifica reCaptcha</i>').addClass('red').removeClass('hidden');
					sendTMLead('event','richiamami',pagina,'ko' );
					break;

				case 'ok0':

					//

					feedDiv=form.find('div.message');
					numTelCli=form.find('input[name="telcli"]').val();
					urlGet=form.attr('data-endpoint');



					stringHeader="sendPhoneStrip";
    
					pagina=form.find('input[name="pagina"]').val()

					data = {
						telcli:numTelCli,
						orarichiamata:form.find('input[name="orachiamata'+external+'"]:checked').val(),
						datarichiesta:form.find('input[name="datarichiesta"]').val(),
						canale:form.find('input[name="canale"]').val()
					}
					

					var jqxhr = $.ajax({
						method:"GET",
						url:urlGet,
						headers: {headers:stringHeader},
						data:data
					})
					.done(function(data) {
							if (data.response==stringHeader+"_done")
							{
							//	console.log( "success" );
								sendTMLead('event','richiamami',pagina,'ok' );
								// feedDiv.text("Richiesta inviata!").delay(2000).fadeOut();

								$('input', form).prop('checked', false).not('[type="hidden"]').val('');
								$('textarea', form).val('');
								$('#message-error', message).remove();
								message.removeClass('red').html('<i id="message-error">Messaggio inviato correttamente</i>').removeClass('hidden');
								// sendTMLead('event','richiamami',pagina,'ok' );
						

							}
							else
							{
							//	console.log( "fail" );
								sendTMLead('event','richiamami',pagina,'ko' );
								// feedDiv.text("Richiesta non inviata! Riprovare.").toggleClass('red',true).delay( 2000 ).fadeOut();
								message.html('<i id="message-error">L\'invio non è andato a buon fine</i>').addClass('red').removeClass('hidden');
						
							}
					})
					.fail(function() {
					//	console.log( "error" );
						sendTMLead('event','richiamami',pagina,'ko' );
						// feedDiv.text("Errore nell'invio").toggleClass('red',true).delay( 2000 ).fadeOut();
						message.html('<i id="message-error">L\'invio non è andato a buon fine</i>').addClass('red').removeClass('hidden');

					})



					
					break;
				default:

			}


		});

		grecaptcha.reset();

		return false;
	});


});
})(jQuery);
