
const validInput = document.querySelector("#validation-input");

validInput.addEventListener('blur', event => {
    if (validInput.value.length == validInput.dataset.length) {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
    } else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    }
});
