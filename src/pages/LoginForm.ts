
import { InputField } from '../types/InputField';
import createFields from '../utils/createFields';
import { submitForm } from '../utils/submitForm';
import RegisterForm from './RegisterForm';


export const createWrapperForForm = (inputs: InputField[], className: string): HTMLFormElement => {
  const form = document.createElement('form');
  form.className = 'form';
  form.setAttribute("novalidate", "");

  form.classList.add(`form--${className}`);

  return form;
}



export const LoginForm = (inputs: InputField[]): HTMLElement => {
 
  const wrapper = createWrapperForForm(inputs, 'login');

  const filteredInputs: InputField[] = inputs.filter(input => input.category === 'login');
    filteredInputs.forEach(element => {
    const input = createFields.createFields(element);
    wrapper.appendChild(input);
  });

  const submitButton = document.createElement('button');
  submitButton.className = 'button';
  submitButton.type = 'submit';
  submitButton.textContent = 'Send';

  const h3 = document.createElement('h3')
  h3.textContent = 'Nie masz konta?'

  const registerLink = document.createElement('a');
  registerLink.className = 'button'; 
  registerLink.href = '/register'; 
  registerLink.textContent = 'Zarejestruj się';


  registerLink.addEventListener('click', (event) => {
    event.preventDefault();
    wrapper.innerHTML = ''
    const register = RegisterForm(inputs)
    wrapper.appendChild(register)
  });
      
  wrapper.appendChild(submitButton);
  wrapper.appendChild(h3)
  wrapper.appendChild(registerLink)

  submitForm(wrapper, filteredInputs, 'login');
  return wrapper;

}

export default LoginForm;