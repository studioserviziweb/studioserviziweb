$(document).ready(function(){


	$('form#call-me-form').on('submit', '', sendphoneStrip);

  //settaDimContainer(true) ;
  // $( window ).resize(function() {
  //  settaDimContainer(false);
  // });

	$('.privacy').each(function(){
		$(this).find('a').attr('href', window.location.origin + '/privacy');
	});

	$('.privacy_link').each(function(){
		$(this).attr('href', window.location.origin + '/privacy');
	});

  //apri strip mobile
  $('a.strip-mobile').on('click', function(e){
    e.preventDefault();
    $('.strip_container').removeClass('opened');
    divToOpen=$(this).attr('href');
    $(divToOpen).addClass('opened');
    // console.log(divToOpen);
    $("a.strip").removeClass('opened');
    $(".strip[href='"+divToOpen+"']").addClass('opened');

    if ($('input[name="ss_cc"]').val() == 'ss_cc') {
      // if(!$('.header-strips-mobile').is(':visible')) {
        $('.strip-chiamaci.opened').addClass('no-callme');
        $('.header .strips .strip.opened').addClass('no-callme');
        $('.header .strips').find('.call-me').parent().hide();
      // }
    }
  });

  //apri strip desktop
  $('a.strip').on('click', function(e){

		e.preventDefault();
    divToOpen=$(this).attr('href');
    //WdivToOpen=$(divToOpen).outerWidth();
    //$(this).animate({right:WdivToOpen});
    //$(divToOpen).show();
    //$(divToOpen).animate({right:0});
    $(divToOpen).addClass('opened');
    $(this).addClass('opened');

    if ($('input[type="radio"]:checked', '#emplSelCall').attr('id') == 'su100Call') {
      if(!$('.header-strips-mobile').is(':visible')) {
        $('.strip-chiamaci.opened').addClass('no-callme');
        $('.header .strips .strip.opened').addClass('no-callme');
      }
    }
    else {
      $('.strip-chiamaci.opened').removeClass('no-callme');
      $('.strip-chiamaci.opened').find('.call-me').parent().show();
      $('.header .strips .strip.opened').removeClass('no-callme');
    }

    if ($('body').hasClass('post-type-archive-agency') || ($('body').hasClass('single-agency'))) {
      var callmeStrip = $('.strip-chiamaci.opened').find('.col-md-5.call-item');

      $('.strip-chiamaci.opened').find('.call-me').parent().hide();

      callmeStrip.removeClass('col-md-5');
      callmeStrip.addClass('col-md-12');

    	$('.strip-chiamaci.opened').addClass('no-callme');
      $('.header .strips .strip.opened').addClass('no-callme');

    }

    if ($('input[name="ss_cc"]').val() == 'ss_cc') {
      // if(!$('.header-strips-mobile').is(':visible')) {
        $('.strip-chiamaci.opened').addClass('no-callme');
        $('.header .strips .strip.opened').addClass('no-callme');
        $('.header .strips').find('.call-me').parent().hide();
      // }
    }
	});


  // chiudi strip
  $('a.close_strip').on('click', function(e){
		e.preventDefault();
    toClose=$(this).parents('.strip_container ');

    $("a.strip").removeClass('opened');
    toClose.removeClass('opened');

    if (toClose.hasClass('no-callme'))
      toClose.removeClass('no-callme');
      $('.header .strips .strip.no-callme').removeClass('no-callme');
	});

  // apri voce list
  $('.strip_list .content ul li a', '.strip_container').on('click', function(e){

      e.preventDefault();

      toOpen=$(this).attr('href');
      if (toOpen == '#riclav' || toOpen == '#uffsta') {
				$('.strip_container.opened').addClass('strip-small');
        $('a.strip.opened').addClass('strip-a-small');
      }else{
				$('.strip_container.opened').removeClass('strip-small');
				$('a.strip.opened').removeClass('strip-a-small');
			}
      $(toOpen).show();
      $(".strip_list", '.strip_container').hide()//.animate({opacity:0});



      $('#ofsepab2').find('.call-me').remove();



  });

  // back to list
  $('a.back_strip', '.strip_container').on('click', function(e){
      e.preventDefault();
      toClose=$(this).parents('.strip_panel' , '.strip_container');

      $(toClose).hide();
      $('.strip_container.opened').removeClass('strip-small');
      $('a.strip.opened').removeClass('strip-a-small');
      $(".strip_list", '.strip_container').show()//.animate({opacity:1});

  });
  // apri voce list
  $('.strip_list.page_contacts .content ul li a').on('click', function(e){

      e.preventDefault();

      toOpen=$(this).attr('href');
      $(toOpen).show();
      $(".strip_list.page_contacts").hide()//.animate({opacity:0});

      $('#ofsepab2').find('.call-me').hide();
      $('#varieb2').find('.call-me').hide();

  });

  // back to list
  $('a.back_strip', '.page_contacts_panel').on('click', function(e){

      e.preventDefault();
      toClose=$(this).parents('.strip_panel.page_contacts_panel');

      $(toClose).hide();

      $(".strip_list.page_contacts").show()//.animate({opacity:1});

  });

	// show form aziende
  $('input[type="radio"]', '#emplSel').on('click', function () {
    if ( $('input[type="radio"]:checked', '#emplSel') ) {
  		$('.form-components').show();
  	}
  });

  $('input[type="radio"]', '#emplSel2').on('click', function () {
    if ( $('input[type="radio"]:checked', '#emplSel2') ) {
  		$('.form-components2').show();
  	}
    if ( $('input[type="radio"]:checked', '#emplSel2') ) {
  		$('.contacts-azienda2').show();
			var num = $('input[type="radio"]:checked', '#emplSel2').attr('id');
			var val = $('input[type="radio"]:checked', '#emplSel2').val();
	    var imgs = $('.g-num-az');

      imgs.hide();
  		$('#' + num + 'Cont').show();

      $('input[name="numdip2Cont"]').val(val)
  	}

    if (num == 'su1002') {
      $('#ofseazb2').find('.call-me').hide();
    }
    else {
      $('#ofseazb2').find('.call-me').show();
    }
  });


  // $('input[type="radio"]', '#emplSel2').on('click', function () {
  //   if ( $('input[type="radio"]:checked', '#emplSel2') ) {
  // 		$('.form-components2').show();
  // 	}
  // });

	// show grren number aziende
  $('input[type="radio"]', '#emplSelCall').on('click', function () {
    var num = $('input[type="radio"]:checked', '#emplSelCall').attr('id');
    var imgs = $('.emplNumber');

    if ( $('input[type="radio"]', '#emplSelCall').is(':checked') ) {
      imgs.hide();
  		$('#' + num + 'Number').show();
  	}



    if (num == 'su100Call') {
      var callmeStrip = $('.strip-chiamaci.opened').find('.col-md-5.call-item');

      if(!$('.header-strips-mobile').is(':visible')) {
        if (typeof callmeStrip  !== "undefined"){
          $('.strip-chiamaci.opened').find('.call-me').parent().hide();

          callmeStrip.removeClass('col-md-5');
          callmeStrip.addClass('col-md-12');

          $('.strip-chiamaci.opened').addClass('no-callme');
          $('.header .strips .strip.opened').addClass('no-callme');
        }
      }
      else {
      	$('.strip-chiamaci.opened').find('.call-me').parent().hide();
      }

    }
    else {
      var callmeStrip = $('.strip-chiamaci.opened').find('.col-md-12.call-item');
      if (typeof callmeStrip  !== "undefined") {

        callmeStrip.removeClass('col-md-12');
        callmeStrip.addClass('col-md-5');

        $('.strip-chiamaci.opened').removeClass('no-callme');
        $('.header .strips .strip.opened').removeClass('no-callme');
        $('.strip-chiamaci.opened').find('.call-me').parent().show();

      }



    }
  });

	$('input[type="radio"]', '#emplSelCall2').on('click', function () {
    var num = $('input[type="radio"]:checked', '#emplSelCall2').attr('id');
    var imgs = $('.support-az-hide');
    // console.log(num);

    if ( $('input[type="radio"]', '#emplSelCall2').is(':checked') ) {
      imgs.hide();
  		$('#' + num + 'Number').show();
  	}
  });

});



var sendphoneStrip = function (e)
{
	console.log('sendphoneStrip');
  e.preventDefault();
  
  var form = $(this);

  external=form.find('input[name="external"]').val();
  
	feedDiv=form.find('div.message');
  numTelCli=form.find('input[name="telcli"]').val();
  urlGet=form.attr('data-endpoint');
  
  recapchta=false;

  var reg = new RegExp('^[0-9]+$');

  // grid='gr-recallme-'+external;
  // console.log(grid);
  response = grecaptcha.getResponse();

  if (response.length === 0) {
    // console.log('gr if');
  } 
  else 
  {//recapchta ok 
    recapchta=true;
    // console.log('gr else');
  }
	// console.log(numTelCli);

	if (numTelCli=="") {
		//inserire un numero di telefono
//		console.log('no tel');
		feedDiv.text("Inserire un numero di telefono.").toggleClass('red',true).show().delay( 2000 ).fadeOut();

	}
	else if (!reg.test(numTelCli)) {
		//inserire un numero di telefono
//		console.log('cifre');
		feedDiv.text("Inserire solo cifre.").toggleClass('red',true).show().delay( 2000 ).fadeOut();

	}
	else if (!recapchta) {
		//inserire un numero di telefono
//		console.log('recapchta');
		feedDiv.text("Validare il recapchta").toggleClass('red',true).show().delay( 2000 ).fadeOut();

	}
	else {


		feedDiv.text("Invio in corso...").toggleClass('red',false).show();

    stringHeader="sendPhoneStrip";
    
    pagina=form.find('input[name="pagina"]').val()

		data = {
			telcli:numTelCli,
			orarichiamata:form.find('input[name="orachiamata"]:checked').val(),
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
			  console.log( "success" );
        sendTMLead('event','richiamami',pagina,'ok' );
        feedDiv.text("Richiesta inviata!").delay(2000).fadeOut();
        

			}
			else
			{
		    console.log( "fail" );
        sendTMLead('event','richiamami',pagina,'ko' );
        feedDiv.text("Richiesta non inviata! Riprovare.").toggleClass('red',true).delay( 2000 ).fadeOut();
        
			}
	  })
	  .fail(function() {
	//		console.log( "error" );
      sendTMLead('event','richiamami',pagina,'ko' );
			feedDiv.text("Errore nell'invio").toggleClass('red',true).delay( 2000 ).fadeOut();

	  })


	}

};

var sendTMLead = function(ev,c,a,l) {


  /* 


    # category
    ----------
    richiamami
    richiesta contatto
    preventivatore


    # action
    --------
    privati
    negozi uffici
    aziende sotto i 100
    aziende sopra i 100
    pubblica amministrazione 
    varie
  
  */

  a=a.replace('home','privati');
  a=a.replace('office','negozi uffici');
  a=a.replace('negozi_e_uffici','negozi uffici');
  a=a.replace('aziendesopra100','aziende sopra i 100');
  a=a.replace('aziendesotto100','aziende sotto i 100');
  a=a.replace('pubblica_amministrazione','pubblica amministrazione');


  if (typeof dataLayer !== 'undefined' && typeof dataLayer.push === 'function') {
    dataLayer.push({'event' : ev, 'eventCategory' : c, 'eventAction' : a, 'eventlabel' : l});
  } else {
    console.log('dataLayer.push()', {'event' : ev, 'eventCategory' : c, 'eventAction' : a, 'eventlabel' : l});
  };

};
