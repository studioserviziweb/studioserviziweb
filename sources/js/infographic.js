$(document).ready(function(){

  var timer = null;

  startAnimation();

  function startAnimation() {
    timer = setInterval(function(){
      var activeLetter = $('li.letter.active').removeClass('active');
      var activeContent = $('.description.active').removeClass('active');

      if(activeLetter.next() && activeLetter.next().length) {
        activeLetter.next().addClass('active');
      }
      else {
        activeLetter.siblings(':first').addClass('active');
      }

      if(activeContent.next() && activeContent.next().length) {
        activeContent.next().addClass('active');
      }
      else {
        activeContent.siblings(':first').addClass('active');
      }
    }, 3000);
  }

  $('.detail').hover(function(){
    clearInterval(timer);
  }, function(){
    startAnimation();
  });
  $('.letter').hover(function(){
    clearInterval(timer);
  }, function(){
    startAnimation();
  });

  $('li.letter').click(function(e){
		e.preventDefault();

    var desc = $(this).find('a').attr('data-item');

    $('li.letter.active').removeClass('active');
    $('.description.active').removeClass('active');

    $(this).addClass('active');
    $('#' + desc).addClass('active');
  });

});
