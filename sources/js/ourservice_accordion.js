$(".service-item h4").on('click', function(e){
  e.preventDefault();
  if ($(this).parent().hasClass('opened')) {
    //close
    $(this).parent().removeClass('opened');
    $(this).parent().find(".content-service").slideUp();
  } else {
    //open
    $(this).parent().addClass('opened');
    $(this).parent().find(".content-service").slideDown();
  }

});
