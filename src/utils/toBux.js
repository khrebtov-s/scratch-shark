export default function toBux(x) {
	return (x / 100).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
