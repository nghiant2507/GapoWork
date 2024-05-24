import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch'

import './style.css'

const modal = document.getElementById('modal')
const buttonModal = document.querySelectorAll('.button-modal')
const closeModal = document.querySelectorAll('.close')

if (modal) {
    buttonModal.forEach((item) => {
        item.addEventListener("click", function (e) {
            modal.classList.remove('modal-hidden');
            modal.classList.add('modal-active');
        });
    });

    closeModal.forEach((item) => {
        item.addEventListener("click", function (e) {
            modal.classList.remove('modal-active');
            modal.classList.add('modal-hidden');
        });
    });

}


// document.getElementById("submitBtn").addEventListener("click", function(event) {
//     event.preventDefault();
//     var name = document.getElementById("nameInput").value;
//     var email = document.getElementById("emailInput").value;
//     var phone = document.getElementById("phoneInput").value;
//     var title = document.getElementById("titleInput").value;
//     var company = document.getElementById("companyInput").value;
//     var scale = document.getElementById("scaleInput").value;
//
//     fetch("https://docs.google.com/forms/d/e/1FAIpQLSfyrjkeAw8-WkoLGrs5CqeWTXgvhoq4c4H5cKV0h6MhOTpc4g/viewform?usp=sf_link", {
//         method: "POST",
//         body: new URLSearchParams({
//             'entry.766907353': name,
//         }),
//         mode: "no-cors",
//         redirect: "follow",
//         referrer: "no-referrer"
//     })
//         .then(response => {
//             console.log("Form submitted successfully");
//         })
//         .catch(error => {
//             console.error("Error submitting form:", error);
//         });
// });
//
