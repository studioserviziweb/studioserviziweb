$(document).ready(function(){

  $(".flex-technology ul.nav-pills li a").on('click', function(e){
    e.preventDefault();
    if (!$(this).hasClass("active")) {
      id2show=$(this).attr("tab-name");

      $('.flex-technology ul.nav-pills li a.active').removeClass('active');
      $('.flex-technology').find('.tab-content.active').removeClass("active");
      $(this).addClass('active');
      $('.flex-technology').find("#" + id2show + ".tab-content").addClass('active');
    }
  });

});
