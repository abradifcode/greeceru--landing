
$( document ).ready(function() {

  $('#trusted-more').on('click', function(){
    $('#trusted-text').toggleClass('trusted__text--open');
    $(this).toggleClass('trusted__more--open');
  })
});
