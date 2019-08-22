$('.mainmenu li a').hover(
  function(){
    $('.overmask').show();
  }, function(){
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
