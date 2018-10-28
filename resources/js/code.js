function saveInput() {
	var options = {day: 'numeric', month: 'long'};
	var today  = new Date();
	
	var date = document.createElement('SPAN');
	date.classList.add('date');
	date.innerHTML = today.toLocaleDateString("en-US", options) + ' &nbsp;  ';

	var image = document.createElement('IMG');
	image.classList.add('list-image')
	image.setAttribute('src', 'resources/images/electricity.png');

	var imageSpan = document.createElement('SPAN');
	imageSpan.appendChild(image);

	var description = document.getElementById('description').value;
	if (description == "") {
		alert('Please enter description');
		return;
	}
	var span = document.createElement('SPAN');
	span.classList.add('span');
	span.innerHTML = description;

	var inputAmount = document.getElementById('amount').value;
	if (inputAmount == "") {
		alert('Please enter amount');
		return;
	}
	var amountSpan = document.createElement('SPAN');
	amountSpan.classList.add('right-span');
	amountSpan.innerHTML = '₹' + inputAmount + '.00';

	var button = document.createElement("BUTTON");
	button.classList.add('close');
	button.innerHTML = 'x';

	var removeSpan = document.createElement('SPAN');
	removeSpan.appendChild(button);


	var paragraph = document.createElement('LI');
	paragraph.appendChild(date);
	paragraph.appendChild(imageSpan);
	paragraph.appendChild(span);
	paragraph.appendChild(amountSpan);
	paragraph.appendChild(removeSpan);

	document.getElementById('display').appendChild(paragraph);
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
