//

$(document).ready(function(){

  $(".flex-list-district .districts ul.nav li.nav-item").on('click', function(e){
    e.preventDefault();

    $("ul.nav li.nav-item").removeClass("selected");
    $(".img-area img").hide();
    $(".dscr-area div.nav-item").hide();



    link2show=$(this).addClass("selected").attr('data-image');
    $(".img-area img#"+link2show).show();
    $(".dscr-area div."+link2show).show();

    console.log(link2show);

  });

});
