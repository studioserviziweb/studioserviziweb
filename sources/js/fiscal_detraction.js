$(".detraction-item h5").on('click', function(e){
  e.preventDefault();
  if ($(this).parent().hasClass('opened')) {
    //close
    $(this).parent().removeClass('opened');
    $(this).parent().find("fiscal-conv").hide(300);
  } else {
    //open
    var fConv = $(".fiscal-conv");
    fConv.parent().removeClass('opened');;
    fConv.hide(300);
    $(this).parent().addClass('opened');
    $(this).parent().find("fiscal-conv").show(300);
  }

});
