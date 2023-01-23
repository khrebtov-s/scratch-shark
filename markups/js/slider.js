const mSlider = document.getElementById('m-slider');
noUiSlider.create(mSlider, {
	start: 0,
	connect: [false, false],
	range: {
		min: 0,
		max: 6,
	},
});
const range = ['#pos1', '#pos2', '#pos3', '#pos4', '#pos5', '#pos6', '#pos7'];

mSlider.noUiSlider.on('update', (values, handle) => {
	$('.m-color').removeClass();
	$(range[Math.round(values[handle])]).addClass('m-color');
});
