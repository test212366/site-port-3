let text = document.getElementById('port')
let btn = document.getElementById('btn')
let rocks = document.getElementById('mountains')
let paral = document.querySelector('.home__patalax')
let stories = document.querySelector('.stories')

window.addEventListener('scroll', function () {
	let value = window.scrollY
	text.style.top = 50 + value * -0.1 + '%'
	btn.style.marginTop = value * 1.5 + 'px'
	rocks.style.top = value * 0.5 + 'px'
})
window.onload = function () {
	if (rocks) {
		const mountains = 20
		const speed = 0.05
		let positionX = 0, positionY = 0

		let coordXprocent = 0, coordYprocent = 0

		function setMouseParallaxStyle() {
			const distX = coordXprocent - positionX
			const distY = coordYprocent - positionY

			positionX = positionX + (distX * speed)
			positionY = positionY + (distY * speed)

			rocks.style.cssText = `transform: translate(${positionX / mountains}%,${positionY / mountains}%)`
			requestAnimationFrame(setMouseParallaxStyle)
		}
		setMouseParallaxStyle()

		paral.addEventListener('mousemove', function (e) {
			const parallaxWidth = paral.offsetWidth
			const parallaxHeight = paral.offsetHeight

			const coordX = e.pageX - parallaxWidth / 2
			const coordY = e.pageY - parallaxHeight / 2

			coordYprocent = coordY / parallaxWidth * 100
			coordXprocent = coordX / parallaxHeight * 100
		})
	}

}
btn.addEventListener('click', () => {
	stories.scrollIntoView({
		block: 'center',
		inline: 'nearest',
		behavior: 'smooth'
	})
})