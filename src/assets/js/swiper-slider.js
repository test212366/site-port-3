new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 6,
	spaceBetween: 1,
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 3000
	},
	speed: 600
})



function createModalsWindow() {
	const modal = document.createElement('div')
	modal.insertAdjacentHTML('afterbegin', `
	
	<div class="modalDes" id="description">
		<div class=" modalDes__overflow" data-close="close">
			<div class=" modalDes__window">
				<div class="modalDes__title">modal window description</div>
				<div class="modalDes__body"></div>
				<div class="modalDes__footer"></div>
			</div>
		</div>
	</div>
	
	`)
	document.body.appendChild(modal)

	modal.insertAdjacentHTML('afterbegin', `
	<div class="modal__stories" id="story-modal">
		<div class="modal__stories-overlay" data-close="close">
			<div class="modal__stories-window">
				<div class="modal__stories-title">modal story</div>
				<div class="modal__stories-body"></div>
				<div class="modal__stories-footer"></div>
			</div>
		</div>
	</div>
	`)
	document.body.appendChild(modal)
	return modal
}

createModalsWindow()

const body = document.body
const modalBtn = document.querySelectorAll('[data-modal]')
modalBtn.forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault()
		let $this = event.target
		let modalId = $this.getAttribute('data-modal')
		let modal = document.getElementById(modalId)
		let closing = false


		!closing && modal.classList.add('open')
		body.classList.add('remove-scroll')

		const ANIMATION__SPEED = 200
		//!!add comment!! 

		const listener = event => {
			if (event.target.dataset.close) {
				close()
			}
		}
		modal.addEventListener('click', listener)
		function close() {

			closing = true
			body.classList.remove('remove-scroll')
			modal.classList.remove('open')
			modal.classList.add('hide')
			setTimeout(() => {
				modal.classList.remove('hide')
				closing = false
			}, ANIMATION__SPEED)
		}



		console.log(modalId)
	})
})



