$(document).ready( function(){

	enableAction();
});

var enableAction = function(){
	$('form.form-recall-mini').on('submit', '', sendphone);
	$('button.get_quote').on('click', '', openquote);
};

var container = $('.contact-data');
var call = $('#call-me-form2');
var form = $('#strip_form2');
// console.log(call);

var sendphone = function (e)
{
	// console.log('sendphone');
	e.preventDefault();

	feedDiv=$('form.form-recall-mini div.feed');
	numTelCli=$('form.form-recall-mini input[name="telcli"]').val();
	urlGet=$('form.form-recall-mini').attr('data-endpoint');

	// console.log(numTelCli);

	var reg = new RegExp('^[0-9]+$');

	if (numTelCli=="") {

		//inserire un numero di telefono
		// console.log('no tel');
		feedDiv.text("Inserire un numero di telefono.").show().delay( 2000 ).fadeOut();
	}
	else if (!reg.test(numTelCli)) {

		//inserire un numero di telefono
		// console.log('no tel');
		feedDiv.text("Inserire solo cifre.").show().delay( 2000 ).fadeOut();
	}
	else {


		feedDiv.text("Invio in corso...").show();

		stringHeader="sendPhone";

		pagina=$('form.form-recall-mini input[name="page"]').val();

		data = {
			telcli:numTelCli,
			orarichiamata:"",
			datarichiesta:$('form.form-recall-mini input[name="datarichiesta"]').val(),
			canale:$('form.form-recall-mini input[name="canale"]').val()
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
				//   console.log( "success" );
				feedDiv.text("Richiesta inviata!").delay(2000).fadeOut();

				sendTMLead('event','richiamami',pagina,'ok' );
			}
			else
			{
		    	// console.log( "fail" );
				feedDiv.text("Richiesta non inviata! Riprovare.").delay( 2000 ).fadeOut();

				sendTMLead('event','richiamami',pagina,'ko' );
			}
	  })
	  .fail(function() {
			// console.log( "error" );
			feedDiv.text("Errore nell'invio").delay( 2000 ).fadeOut();
				
			sendTMLead('event','richiamami',pagina,'ko' );

	  })

	
	}

};

// var openphone = function (e) {
//
// 	if ( !container.is(':visible') ){
// 		container.fadeIn('slow');
// 		if ( !call.is(':visible') ) {
// 			call.fadeIn('slow');
// 		}else{
// 			call.fadeOut('slow');
// 		}
//
// 	} else {
// 		if (!call.is(':visible') && form.is(':visible')){
// 			form.fadeOut(1);
// 			call.fadeIn('slow');
// 		}else{
// 			call.fadeOut('slow');
// 			container.fadeOut('slow');
// 		}
// 	}
//
// };

var openquote = function (e) {
	// console.log('openquote');
	window.location.href="configuratore";
	// if ( !container.is(':visible') ){
	// 	container.fadeIn('slow');
	// 	if ( !form.is(':visible') ) {
	// 		form.fadeIn('slow');
	// 	}else{
	// 		form.fadeOut('slow');
	// 	}
	//
	// } else {
	// 	if (!form.is(':visible') && call.is(':visible')){
	// 		call.fadeOut(1);
	// 		form.fadeIn('slow');
	// 	}else{
	// 		form.fadeOut('slow');
	// 		container.fadeOut('slow');
	// 	}
	// }
};
