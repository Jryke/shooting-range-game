const bullseye = document.getElementsByClassName('bullseye')
const secondCircle = document.getElementsByClassName('second-circle')
const thirdCircle = document.getElementsByClassName('third-circle')
const fourthCircle = document.getElementsByClassName('fourth-circle')
const fifthCircle = document.getElementsByClassName('fifth-circle')
const sixthCircle = document.getElementsByClassName('sixth-circle')
const seventhCircle = document.getElementsByClassName('seventh-circle')
const eigthCircle = document.getElementsByClassName('eigth-circle')
const ninthCircle = document.getElementsByClassName('ninth-circle')
const tenthCircle = document.getElementsByClassName('tenth-circle')

let circlesArr = [bullseye, secondCircle, thirdCircle, fourthCircle, fifthCircle, sixthCircle, seventhCircle, eigthCircle, ninthCircle, tenthCircle]

let points = 0

// click events for circles
circlesArr.forEach(circle => {
	Array.from(circle).forEach(function(element) {
	  element.addEventListener('click', () => {
			points += 1
			document.getElementById('score').textContent = points.toString()
		});
	});
})

// let circlesArr = [{bullseye: bullseye}, {secondCircle: secondCircle}, {thirdCircle: thirdCircle}, {fourthCircle: fourthCircle}, {fifthCircle: fifthCircle}, {sixthCircle: sixthCircle}, {seventhCircle: seventhCircle}, {eigthCircle: eigthCircle}, {ninthCircle: ninthCircle}, {tenthCircle: tenthCircle}]

// Array.from(bullseye).forEach(function(element) {
//   element.addEventListener('click', () => {
// 		console.log('bullseye clicked!')
// 	});
// });
