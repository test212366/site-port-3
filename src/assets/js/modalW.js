

// const modalBtn = document.querySelectorAll('[data-modal]')
// modalBtn.forEach(item => {
// 	item.addEventListener('click', event => {
// 		event.preventDefault()
// 		let $this = event.target
// 		let modalId = $this.getAttribute('data-modal')
// 		let modal = document.getElementById(modalId)
// 		modal.classList.add('open')

// 		const ANIMATION__SPEED = 200
// 		//!!add comment!! 

// 		const listener = event => {
// 			if (event.target.dataset.close) {
// 				close()
// 			}
// 		}
// 		modal.addEventListener('click', listener)
// 		function close() {
// 			modal.classList.remove('open')
// 			modal.classList.add('hide')
// 			setTimeout(() => {
// 				modal.classList.remove('hide')
// 			}, ANIMATION__SPEED)
// 		}



// 		console.log(modalId)
// 	})
// })









// modal = function (options) {
// 	function modalCreate(options) {
// 		const DEFAULT_WIDTH = '500px'
// 		const nmodal = document.createElement('div')
// 		nmodal.classList.add('nmodal')
// 		nmodal.insertAdjacentHTML('afterbegin', `
// 				<div class="nmodal__overlay" data-close="true">
// 					<div class="modal__window" style="width:${options.width || DEFAULT_WIDTH}">
// 						<div class="modal__title">${options.title || ''} ${options.closable ? `<span data-close="true">&times</span>` : ''}</div>
// 						<div class="modal__body">
// 							<p>${options.content || ''}</p>
// 						</div>
// 						<div class="modal__footer">
// 							<button>fdfdf</button>
// 						</div>
// 					</div>
// 				</div>
// 			`)
// 		document.body.appendChild(nmodal)
// 		return nmodal
// 	}
// 	const createModal = modalCreate(options)
// 	const button = document.querySelector('.open-desctip')
// 	const ANIMATION__SPEED = 200
// 	let closing = false
// 	let destroyed = false
// 	button.addEventListener('click', open)


// 	function open() {
// 		if (destroyed) {
// 			return console.log('modal is destroyed')
// 		}

// 		!closing && createModal.classList.add('open')
// 		button.classList.add('close')
// 	}
// 	function close() {
// 		closing = true
// 		createModal.classList.remove('open')
// 		createModal.classList.add('hide')
// 		setTimeout(() => {
// 			createModal.classList.remove('hide')
// 			closing = false
// 		}, ANIMATION__SPEED)
// 		button.classList.remove('close')
// 		button.classList.add('active')
// 		setTimeout(() => {
// 			button.classList.remove('active')
// 		}, ANIMATION__SPEED)
// 	}
// 	const listener = event => {
// 		if (event.target.dataset.close) {
// 			close()
// 		}
// 	}
// 	createModal.addEventListener('click', listener)

// 	function destroy() {
// 		destroyed = true
// 		createModal.parentNode.removeChild(createModal)
// 		createModal.removeEventListener('click', listener)
// 	}


// }
// modal({
// 	title: 'title name',
// 	content: '',
// 	width: '500px',
// 	closable: true,
// })

