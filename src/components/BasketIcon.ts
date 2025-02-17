import { navigateComponent } from '../router/router';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/header.scss';

export const BasketIcon = (): HTMLElement => {
    const wrapper = document.createElement("div");
    wrapper.className = 'basket__wrapper'
  
    const basketLink = document.createElement("a");
    basketLink.setAttribute('id', 'basket');
    basketLink.href = `/cart`;

    const basketIcon = document.createElement('i');
    basketIcon.classList.add('fas', 'fa-shopping-basket');
    basketIcon.style.fontSize = '1.5em';
    
    basketLink.appendChild(basketIcon)
    wrapper.appendChild(basketLink);

    const findLinkToBasket = wrapper.querySelector('#basket');

  if (findLinkToBasket) {
      findLinkToBasket.addEventListener("click", (event) => {
        event.preventDefault();
       
        const path = findLinkToBasket.getAttribute("href");
  
        if (path) {
          navigateComponent(path);
        }
      });
    }
    return wrapper;
};

export default BasketIcon;