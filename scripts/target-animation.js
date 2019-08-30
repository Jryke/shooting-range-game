const targetArr = Array.from(document.getElementsByClassName('tenth-circle'))

const setAnimationParams = () => {
	targetArr.forEach(target => {
	setTimeout(() => target.style.animation = `pop-up ${(Math.random() * 3) + 1}s linear infinite`, Math.random() * 5000)
})}

setInterval(setAnimationParams(), Math.random() * 5000)
