import '../styles/header.scss';
import { navigateComponent } from '../router/router';

export const BasketItem = (): HTMLElement => {
    const wrapper = document.createElement("div");
  

    const basketLink = document.createElement("a");
    basketLink.setAttribute('id', 'basket');
    basketLink.href = `/cart`;
    const basket = document.createElement('h3');
    basket.textContent = 'Koszyk';
    // jak zaimportować ikonę koszyka w czystym JS
    basketLink.appendChild(basket)
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

export default BasketItem;
