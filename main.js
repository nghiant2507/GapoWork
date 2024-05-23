import './style.css'

var modal = document.getElementById('modal')
var buttonModal = document.querySelectorAll('.button-modal')
var clostModal = document.querySelectorAll('.close')

if (modal) {
    buttonModal.forEach((item) => {
        item.addEventListener("click", function (e) {
            modal.classList.remove('modal-hidden');
            modal.classList.add('modal-active');
        });
    });

    clostModal.forEach((item) => {
        item.addEventListener("click", function (e) {
            modal.classList.remove('modal-active');
            modal.classList.add('modal-hidden');
        });
    });

}


