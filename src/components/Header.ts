import { navigateComponent, navigateToRegister } from '../router/router';
import '../styles/header.scss';
import BurgerMenu from '../ui/BurgerMenu';
import Navigation from '../ui/Navigation';
import BasketItem from './BasketItem';
import LoginItem from './LoginItem';

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

  const basket = BasketItem()

  mobileWrapper.appendChild(basket);

  header.appendChild(mobileWrapper);

  return header;

};

export default Header;