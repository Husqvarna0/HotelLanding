// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



const emailInput = document.getElementById("form-subscribe-input");
const emailForm = document.getElementById("form-subscribe");

emailForm.addEventListener("submit", (e) => {

	const email = emailInput.value;
	const emailRegex = /^\S+@\S+\.\S+$/;
	if (!emailRegex.test(email)) {
		emailInput.placeholder = "Error";
		emailInput.classList.add('input-form-subscribe-error');
		emailInput.value = "";
		e.preventDefault();
	
	} else {
		emailInput.classList.remove('input-form-subscribe-error');
	}
	
 });
 
 
