$(document).ready(function() {
	$(".async").each(function(index, element){
		var img = $(element).attr("data-src");
		$(element).attr("src", img);
	});
	new PatrickWebs().init();
});
$(".scroll").click(function() {
	var targetDiv = $(this).attr('href');
	$('html, body').animate({
		scrollTop: ($(targetDiv).offset().top-100)
	}, 500);
});
$('.skills .items').slick({
	infinite: true,
	slidesToShow: 5,
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: false,
	draggable: true,
	touchMove: true,
	pauseOnHover: true,
	responsive: [
	  {
		breakpoint: 769,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  }
	]
  });