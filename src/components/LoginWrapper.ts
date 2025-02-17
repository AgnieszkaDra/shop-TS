import LoginForm from "../pages/LoginForm";
import formFields from "../fields/formFields";
import RegisterForm from "../pages/RegisterForm";

export const LoginWrapper = (type = ''): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'container';

  const containerForms = document.createElement('div');
  containerForms.className = 'container__forms'

  const backHomeLink = document.createElement('a');
  backHomeLink.className = 'container__link-home'
  backHomeLink.setAttribute('id', 'home');
  backHomeLink.href = `/index.html`;

  const backHome = document.createElement('h3');
  backHome.innerText = 'Strona główna'
  backHomeLink.appendChild(backHome);

  containerForms.appendChild(backHomeLink)
  containerForms.appendChild(LoginForm(formFields));


  if (type === 'register') {

    const backHomeLink = document.createElement('a');
    backHomeLink.className = 'container__link-home'
    backHomeLink.setAttribute('id', 'home');
    backHomeLink.href = `/index.html`;

    const backHome = document.createElement('h3');
    backHome.innerText = 'Strona główna'
    backHomeLink.appendChild(backHome);

    containerForms.appendChild(backHomeLink)
    containerForms.appendChild(RegisterForm(formFields));
  }

  container.appendChild(containerForms)

  return container;
};

export default LoginWrapper;