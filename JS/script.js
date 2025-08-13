const // Variables
btnPopup = document.querySelector(".btnLogin-popup"),
cover_box = document.querySelector(".cover_box"),
loginLink = document.querySelector(".login-link"),
registerLink = document.querySelector(".register-link"),
iconClose = document.querySelector(".icon-close");

// Functions:
function activateCoverBox() {
    cover_box.classList.add('active');
}
function deactivateCoverBox() {
    cover_box.classList.remove('active');
}
function activatePopup() {
    cover_box.classList.add('active-popup');
}
function deactivatePopup() {
    cover_box.classList.remove('active-popup');
}

// Events of Functions bellow
registerLink.addEventListener('click', activateCoverBox); //LEMBRETE: quando for chamar uma função com o uso de um Evento DEVE-SE colocar o nome da função SEM OS PARÊNTESES!!!

registerLink.click = e => {
    e.preventDefault();
}

loginLink.addEventListener('click', deactivateCoverBox);
btnPopup.addEventListener('click', activatePopup);
iconClose.addEventListener('click', deactivatePopup);