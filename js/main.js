const parent = document.querySelector('#parent');

const ps = document.querySelectorAll('p');

for (let elem of ps) {
	const span = document.createElement('span');
	span.innerHTML = elem.textContent;
	elem.textContent = '';
	elem.appendChild(span);

	span.style.marginRight = '20px';

	const link = document.createElement('a');
	link.href = 'https://ya.ru/';
	link.textContent = 'remove';
	span.insertAdjacentElement('afterend', link);

	link.addEventListener('click', function(e) {
		e.preventDefault();
		const p = link.closest('p');

		p.style.backgroundColor = 'red';
		setTimeout(function() {
			p.remove();
		}, 300)

	})
}

parent.addEventListener('click', function setText(e) {
	if (e.target.matches('span')) {

		const span = e.target;

		const input = document.createElement('input');

		input.type = 'text';
		input.value = span.textContent;
		span.textContent = '';

		span.appendChild(input);
		input.focus();
		
		input.addEventListener('blur', function(e) {
			e.preventDefault();
			const p = input.closest('p');
			p.style.backgroundColor = 'green';
			setTimeout(function() {
				span.textContent = input.value;
				p.style.backgroundColor = '#fff';
			}, 300)
			parent.addEventListener('click', setText)
		})
		parent.removeEventListener('click', setText);
	} 
})