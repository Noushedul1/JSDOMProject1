var myInput = document.getElementById('myInput');
myInput.addEventListener('keypress', e => {
	if(e.keyCode === 13) {
		e.target.value;
		var li = document.createElement('li');
		li.innerHTML = e.target.value;
		var span = document.createElement('span');
		span.className='ml-3 myStyle';
		span.id='sp';
		span.innerHTML='X';
		li.appendChild(span);
		var result = document.querySelector('ul').appendChild(li);
		e.target.value='';
	}
});

       
