$(document).ready(() => {
	$('select').niceSelect();

	$('#btn-ticket-details').on('click', () => {
		$('.ticket-info, .a-next-wrapper, .a-prev-wrapper').addClass('d-none');
		$('.ticket-info-wrapper').css('z-index', '11');
		$('body').append('<div class="bg-modal"></div>');
		$('.ticket-details').removeClass('d-none');
	});

	$('.close-details').on('click', () => {
		$('.ticket-details').addClass('d-none');
		$('.bg-modal').remove();
		$('.ticket-info-wrapper').css('z-index', '');
		$('.ticket-info, .a-next-wrapper, .a-prev-wrapper').removeClass('d-none');
	});

	$('.open-modal').on('click', function () {
		if ($(this).children('.r-ticket-modal').is('.d-none')) {
			$('body').append('<div class="bg-modal"></div>');
			$(this).children('.r-ticket-modal').removeClass('d-none');
			$(this).children().children('.triangle').removeClass('d-none');
		}
	});

	$('.btn-close-modal').on('click', () => {
		setTimeout(() => {
			$('.bg-modal').delay(5300).remove();
			$('.r-ticket-modal, .triangle').delay(300).addClass('d-none');
		}, 100);
	});
});
