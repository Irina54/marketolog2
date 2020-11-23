$(document).ready(function () {
	$('.slider-expertise__body').slick({
		arrows: true,
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1045,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 730,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 535,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]

	});
	$('.slider-reviews__body').slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1220,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.footer__arrow').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 1000);
		return false;
	});
});






