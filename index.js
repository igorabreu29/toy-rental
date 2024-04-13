AOS.init();

const openMenuButton = document.querySelector('.menu-button')
const closeMenuButton = document.querySelector('.close-modal')
const menu = document.querySelector('[data-modal-state]')

openMenuButton.addEventListener('click', () => {
    menu.dataset.modalState = 'open'
})

closeMenuButton.addEventListener('click', () => {
    menu.dataset.modalState = 'close'
})