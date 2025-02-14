import LoginWrapper from '../components/LoginWrapper';
import formFields from '../fields/formFields';
import { InputField } from '../types/InputField';
import createFields  from '../utils/createFields';
import { submitForm } from '../utils/submitForm';
import LoginForm from './LoginForm';


export const createWrapperForForm = (className: string): HTMLFormElement => {
  const form = document.createElement('form');
  form.className = 'form';
  form.setAttribute("novalidate", "");

  form.classList.add(`form--${className}`);

  return form;
}

export const RegisterForm = (inputs: InputField[]): HTMLElement => {

  const container = document.createElement('div')
  container.className = 'container-register'

  const registerForm = document.querySelector('.container-register') as HTMLElement;
    if (registerForm) {
      registerForm.classList.toggle('block')
    }
    
  const containerLogin = document.querySelector('.container-login')
    if (containerLogin) {
      container.classList.toggle('block')
    }
  
  const wrapperForm = document.createElement('div')
  wrapperForm.className = 'form__wrapper'
   
  const formTitle = document.createElement('h2')
  formTitle.className = 'form__title'
  formTitle.textContent = 'Rejestracja'

  const form = createWrapperForForm('register');

  const filteredInputs: InputField[] = inputs.filter(input => input.category === 'register');
    filteredInputs.forEach(element => {
    const input = createFields.createFields(element);
    form.appendChild(input);
  });

  const submitButton = document.createElement('button');
  submitButton.className = 'button';
  submitButton.classList.add('form__button')
  submitButton.type = 'submit';
  submitButton.textContent = 'Wyślij';

  form.appendChild(submitButton)

  const wrapperFoot = document.createElement('p')
  wrapperFoot.classList.add('form__foot')
  wrapperFoot.textContent = 'Zarejestrowany?'

  const loginLink = document.createElement('a');
  loginLink.className = 'form__foot__link'; 
  loginLink.textContent = 'Zaloguj się';

  loginLink.addEventListener('click', (event) => {
    event.preventDefault();
    
    const containerLogin = document.querySelector('.container-register')
      if (containerLogin) {
        container.classList.toggle('block')
      }

    const loginLogin = document.querySelector('.container-login')
      if (loginLogin) {
        container.classList.toggle('block')
      }

    const login = LoginForm(formFields)

    const containerForms = document.querySelector('.container-forms')
      if (containerForms) {
        containerForms.innerHTML =''
        containerForms.appendChild(login)
      }

  });
  
  wrapperForm.appendChild(form)
  wrapperFoot.appendChild(loginLink)
        
  container.appendChild(formTitle)
  container.appendChild(wrapperForm)
  container.appendChild(wrapperFoot)

  submitForm(form, filteredInputs, 'register');

  return container;

}

export default RegisterForm;