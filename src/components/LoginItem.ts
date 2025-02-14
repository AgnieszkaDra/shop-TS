import '../styles/header.scss';

import { navigateToLogin } from '../router/router';
import LoginWrapper from './LoginWrapper';

export const LoginItem = (): HTMLElement => {
    const wrapper = document.createElement("div");
 

    const basketLink = document.createElement("a");
    basketLink.setAttribute('id', 'login');
    basketLink.href = `/moje konto`;
    const basket = document.createElement('h3');
    basket.textContent = 'Zaloguj się';
    basketLink.appendChild(basket)
    wrapper.appendChild(basketLink);

    const findLinkToLogin = wrapper.querySelector('#login');
  if (findLinkToLogin) {
      findLinkToLogin.addEventListener("click", (event) => {
        event.preventDefault();
       
        const path = findLinkToLogin.getAttribute("href");
  
        if (path) {
          navigateToLogin(path);
       
          // const loginForm = document.querySelector('.container-login') as HTMLElement;
          // if (loginForm) {
          //   loginForm.classList.toggle('block')
          // }
        }
      });
    }
    return wrapper;
};

export default LoginItem;

