$(document).ready(function(){

  $(".flex-work-with-us ul.nav-pills li a").on('click', function(e){
    e.preventDefault();
    if (!$(this).hasClass("active")) {
      id2show=$(this).attr("tab-name");

      $('.flex-work-with-us ul.nav-pills li a.active').removeClass('active');
      $('.flex-work-with-us').find('.tab-content.active').removeClass("active");
      $(this).addClass('active');
      $('.flex-work-with-us').find("#" + id2show + ".tab-content").addClass('active');
    }
  });

});
