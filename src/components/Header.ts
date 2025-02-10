import { navigateComponent } from '../router/router';
import '../styles/header.scss';
import BurgerMenu from '../ui/BurgerMenu';
import Navigation from '../ui/Navigation';

export const Header = (): HTMLElement => {
  const header = document.createElement("header");
  header.classList.add("header");

  const mobileWrapper = document.createElement("div");
  mobileWrapper.classList.add("header-mobile");

  const burgerMenu = BurgerMenu();
  const navMenu = Navigation();

  navMenu.classList.add("none");

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("none");
    navMenu.classList.toggle("none");
  });

  mobileWrapper.appendChild(burgerMenu);

  const link = document.createElement("a");
  link.href = `/cart`;
  const basket = document.createElement('h3')
  basket.textContent = 'Koszyk'
  link.appendChild(basket)

   link.addEventListener("click", (event: Event) => {
        event.preventDefault();
        const path = link.getAttribute("href");
       
        if (path) {
          navigateComponent(path);
        }
      });
 

  mobileWrapper.appendChild(link)


 
  header.appendChild(navMenu);
  header.appendChild(mobileWrapper);

  return header;
};

export default Header;

