import { InputField } from '../types/InputField';
import createFields from '../utils/createFields';
import { submitForm } from '../utils/submitForm';
import RegisterForm from './RegisterForm';
import formFields from '../fields/formFields';
import '../styles/main.scss';

export const createWrapperForForm = (className: string): HTMLFormElement => {
  const form = document.createElement('form');
  form.className = 'form';
  form.setAttribute("novalidate", "");

  form.classList.add(`form--${className}`);

  return form;
}

export const LoginForm = (inputs: InputField[]): HTMLElement => {

  const container = document.createElement('div')
  container.className = 'container__login'
  container.classList.toggle('block')

  const wrapperForm = document.createElement('div')
  wrapperForm.className = 'form__wrapper'
 
  const form = createWrapperForForm('login')
  const formTitle = document.createElement('h2')
  formTitle.className = 'form__title'
  formTitle.textContent = 'Logowanie'
  
  const filteredInputs: InputField[] = inputs.filter(input => input.category === 'login');
    filteredInputs.forEach(element => {
    const input = createFields.createFields(element);
    form.appendChild(input);
  });

  const submitButton = document.createElement('button');
  submitButton.className = 'button';
  submitButton.classList.add('form__button')
  submitButton.type = 'submit';
  submitButton.textContent = 'Zaloguj się';

  const wrapperFoot = document.createElement('p')
  wrapperFoot.classList.add('form__foot')
  wrapperFoot.textContent = 'Nie masz konta?'

  const registerLink = document.createElement('a');
  registerLink.className = 'form__foot__link'; 
  registerLink.textContent = 'Zarejestruj się';

  registerLink.addEventListener('click', (event) => {
    event.preventDefault();
   
    const containerLogin = document.querySelector('.container__login')
    if (containerLogin) {
      container.classList.toggle('block')
    }

    const registerLogin = document.querySelector('.container__register')
    if (registerLogin) {
      container.classList.toggle('block')
    }

    const register = RegisterForm(formFields)
    const containerForms = document.querySelector('.container__forms')
    if (containerForms) {
      containerForms.innerHTML =''
      containerForms.appendChild(register)
    }
  });

  wrapperFoot.appendChild(registerLink)

  wrapperForm.appendChild(form)
  wrapperForm.appendChild(wrapperFoot)
  form.appendChild(submitButton);

  container.appendChild(formTitle)
  container.appendChild(wrapperForm)

  submitForm(form, filteredInputs, 'login');
  return container;

}

export default LoginForm;