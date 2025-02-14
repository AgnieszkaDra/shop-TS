import LoginForm from "../pages/LoginForm";
import formFields from "../fields/formFields";
import RegisterForm from "../pages/RegisterForm";

export const LoginWrapper = (type = ''): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'container';

  const containerForms = document.createElement('div');
  containerForms.className = 'container-forms'
  containerForms.appendChild(LoginForm(formFields));

  if (type === 'register') {
    containerForms.appendChild(RegisterForm(formFields));
  }
 
  container.appendChild(containerForms)
  return container;
};

export default LoginWrapper;