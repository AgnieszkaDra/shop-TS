import '../styles/header.scss';

import { navigateToLogin } from '../router/router';

export const LoginItem = (): HTMLElement => {
    const wrapper = document.createElement("div");
 

    const basketLink = document.createElement("a");
    basketLink.setAttribute('id', 'login');
    basketLink.href = `/login`;
    const basket = document.createElement('h3');
    basket.textContent = 'Zaloguj się';
    basketLink.appendChild(basket)
    wrapper.appendChild(basketLink);

    const findLinkToBasket = wrapper.querySelector('#login');
  if (findLinkToBasket) {
      findLinkToBasket.addEventListener("click", (event) => {
        event.preventDefault();
       
        const path = findLinkToBasket.getAttribute("href");
  
        if (path) {
          navigateToLogin(path);
        }
      });
    }
    return wrapper;
};

export default LoginItem;
