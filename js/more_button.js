const buttonmore = document.querySelector('#buttonmore a');
const hidden_targets = document.querySelectorAll('.card.cardhidden');

buttonmore.addEventListener('click', (event) => {
    event.preventDefault();
    hidden_targets.forEach((target) => {
        target.classList.remove('cardhidden');
    });
    document.querySelector('#buttonmore').classList.add('hidden');
})