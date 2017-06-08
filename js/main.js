$( document ).ready(function() {
  setTimeout(
  function()
  {
    Materialize.showStaggeredList('#list-main');
    $('#list-parent').removeClass('hide');
  }, 300);
  setTimeout(
  function()
  {
    $('.tap-target').tapTarget('open');
  }, 4000);
    $('#image-me').removeClass("scale-out").addClass("scale-in");
    $('#main-menu').click(function(){
      $('.tap-target').tapTarget('open');
    });
});
