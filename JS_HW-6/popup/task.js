var modal = document.querySelector('#subscribe-modal');

var closeButton = modal.querySelector('.modal__close');

if (!localStorage.getItem('modalClosed')) {
    modal.classList.add('modal_active');
}

closeButton.addEventListener('click', function() {
    modal.classList.remove('modal_active');
    localStorage.setItem('modalClosed', true);
});