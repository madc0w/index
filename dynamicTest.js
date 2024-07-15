function load() {
	const letters = 'qwertzuiopasdfghjklyxcvbnm';
	let html = '';
	for (let i = 0; i < 1000; i++) {
		html += letters[Math.floor(Math.random() * letters.length)];
	}
	document.getElementById('content').innerHTML = html;
}
