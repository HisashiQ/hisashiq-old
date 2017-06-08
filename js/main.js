$( document ).ready(function() {
  setTimeout(
  function()
  {
    $('.main-list').tapTarget('open');
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
