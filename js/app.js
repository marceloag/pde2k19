$('.has-dropdown').hover(
  function(){
    // $('.navbar').css("background-color","white");
    $('.overmask').show();
  }, function(){
    // $('.navbar').css("background-color","transparent");
    $('.overmask').hide();
  }

)


$(document).ready(function(){

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.30);

		$('.restoftheworld').css({
			'background-position': '0 -' + posicion + 'px'
		});
	});

});
