$(document).ready(() => {
	$('.label-group label').on('click', function () {
		const idValue = '#' + $(this).attr('for');
		$(idValue).attr('type') === 'password'
			? $(idValue).attr('type', 'text')
			: $(idValue).attr('type', 'password');
	});
	$('.label-group input').focus(function () {
		$(this)
			.next('label')
			.removeClass('blocked');
	});
	$('.label-group input').focusout(function () {
		if ($(this).val() === '') {
			$(this)
				.next('label')
				.addClass('blocked');
		}
	});

	$('.modal-open').on('click', function () {
		const modal = '#' + $(this).attr('for');
		if ($('*').is(modal)) {
			$(modal).fadeToggle(200);
			$(modal + ' .content-modal').slideToggle(200);
			$('body').addClass('b-modal');
		}
	});

	$('.modal-close').on('click', () => {
		$('.content-modal').slideToggle(200);
		$('.form-modal').fadeToggle(200);
		$('body').removeClass('b-modal');
	});

	$('.check-list li').on('click', function () {
		$('.checkmark').removeClass('checkmark');
		$(this).addClass('checkmark');
	});

	$('#onboarding').on('click', function () {
		$(this).remove();
	});
});
