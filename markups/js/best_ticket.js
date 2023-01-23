$(document).ready(() => {
	$('.state').on('click', function () {
		$('[for=' + $(this).attr('id') + ']').removeClass('d-none');
	});

	let liParent;
	$('.check-list li').on('click', function () {
		liParent = $(this).parents('.check-list');
		liParent.children().children().removeClass('checkmark');
		$(this).addClass('checkmark');
		$('#' + liParent.attr('for')).addClass('c-black').text($(this).text());
		liParent.addClass('d-none');
	});
});
