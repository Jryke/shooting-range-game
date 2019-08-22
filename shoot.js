const bullseye = document.getElementsByClassName('bullseye')
const secondCircle = document.getElementsByClassName('second-circle')
const thirdCircle = document.getElementsByClassName('third-circle')
const fourthCircle = document.getElementsByClassName('fourth-circle')
const outerCircle = document.getElementsByClassName('outer-circle')

// click event for bullseye
Array.from(bullseye).forEach(function(element) {
  element.addEventListener('click', () => {
		console.log('bullseye clicked!')
	});
});
