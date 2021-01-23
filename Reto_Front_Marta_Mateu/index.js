$(window).on('load', function() {
  setTimeout(function(){
      $('.subscribeModal-lg').modal('show');
  }, 1000);
});
$('#Reloadpage').click(function() {
   location.reload();
}); 