$(document).ready(function(){

  $(".flex-ouroffices-content .region").on('click', function(e){
    e.preventDefault();
    if ($(this).hasClass('opened')) {
      //close
      $(this).removeClass('opened');
      $(this).parent().find(".content").slideUp();
    } else {
      //open
      $(this).addClass('opened');
      $(this).parent().find(".content").slideDown();
    }

  });

});
