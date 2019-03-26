$(document).ready(function(){

  $(".flex-information-tab ul.nav-pills li a").on('click', function(e){
    e.preventDefault();
    if (!$(this).hasClass("active")) {
      id2show=$(this).attr("href");
      flexinftab=$(this).parents(".flex-information-tab");
      flexinftab.find("a.active").removeClass("active");
      tabconts=flexinftab.find(".tab-pane").hide();
      $(this).addClass("active");
      flexinftab.find(".tab-pane"+id2show).show();

    }
  });

  $(".flex-service-convention ul.nav-pills li a").on('click', function(e){
    e.preventDefault();

    if (!$(this).hasClass("active")) {
      id2show=$(this).attr("href");
			tabId = $(this).parents(".flex-service-convention").attr("id");
      flexinftab=$('#'+tabId);
      flexinftab.find("a.active").removeClass("active");
      tabconts=flexinftab.find(".tab-pane").hide();
      $(this).addClass("active");
      $(id2show).show();

    }
  });

});
