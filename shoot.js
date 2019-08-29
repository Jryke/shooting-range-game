let shots = 0

// click event for shots
document.getElementById('background').addEventListener('click', () => {
	shots ++
	document.getElementById('shot-count').textContent = shots.toString()
})
