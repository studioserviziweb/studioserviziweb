$(document).ready(function(){

  $(".flex-modalwindows .btn-action a").on('click', function(e){
    e.preventDefault();

    var btn = $(this).attr('data-value');
    var display = $(this).attr('data-display');


    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.detail').removeClass('active-' + display);
    }
    else {

      if (display == 'center'){
        $('.flex-modalwindows .detail').removeClass('active-right');
        $('.flex-modalwindows .detail p').removeClass('active-right');
      }
      else {
        $('.flex-modalwindows .detail').removeClass('active-center');
        $('.flex-modalwindows .detail p').removeClass('active-center');
      }

      $('.btn-action a').removeClass('active');

      if (btn == 'yes'){
        $('body').removeClass('modalwindow');
        $('.flex-modalwindows').css('display','none');
      }
      else{
        $('.flex-modalwindows .detail').addClass('active-' + display).slideDown();
        $('.flex-modalwindows .detail p.response-' + display).addClass('active-' + display).slideDown();
        $(this).addClass('active');
      }
    }
  });
});
