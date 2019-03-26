//

$(document).ready(function(){

  $(".flex-conventions-item h2").on('click', function(e){
    e.preventDefault();
    if ($(this).parent().hasClass('opened')) {
      //close
      $(this).parent().removeClass('opened');
      $(this).parent().find(".cont-conv").slideUp();
    } else {
      //open
      $(this).parent().addClass('opened');
      $(this).parent().find(".cont-conv").slideDown();
    }

  });

});
