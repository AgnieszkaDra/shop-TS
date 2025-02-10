import { InputField } from '../types/InputField';
import createFields  from '../utils/createFields';
import { submitForm } from '../utils/submitForm';


export const createWrapperForForm = (inputs: InputField[], className: string): HTMLFormElement => {
  const form = document.createElement('form');
  form.className = 'form';
  form.setAttribute("novalidate", "");

  form.classList.add(`form--${className}`);



  return form;
}

export const RegisterForm = (inputs: InputField[]): HTMLElement => {
  const wrapper = createWrapperForForm(inputs, 'register');

  const filteredInputs: InputField[] = inputs.filter(input => input.category === 'register');
    filteredInputs.forEach(element => {
    const input = createFields.createFields(element);
    wrapper.appendChild(input);
  });

  const submitButton = document.createElement('button');
  submitButton.className = 'button';
  submitButton.type = 'submit';
  submitButton.textContent = 'Send';

  const switchContainer = document.createElement('div');
  switchContainer.className = 'switch-container';

  const registerButton = document.createElement('button');
  registerButton.textContent = 'Register';
  registerButton.className = 'switch-button';

  const loginButton = document.createElement('button');
  loginButton.textContent = 'Login';
  loginButton.className = 'switch-button';

  switchContainer.appendChild(registerButton);
  switchContainer.appendChild(loginButton);
      
  wrapper.appendChild(submitButton);

  submitForm(wrapper, filteredInputs, 'register');
  return wrapper;

}

export default RegisterForm;