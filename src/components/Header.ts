
import '../styles/header.scss';
import BurgerMenu from '../ui/BurgerMenu';
import Navigation from '../ui/Navigation';
import BasketItem from './BasketItem';

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
  header.appendChild(navMenu);
  header.appendChild(mobileWrapper);
  const basket = BasketItem()
  // const LoginItem = LoginItem()

  mobileWrapper.appendChild(basket);
 // mobileWrapper.appendChild(LoginItem);

 // loginItem nie działa jako link w Header. - kompletnie nie rozumiem

  header.appendChild(mobileWrapper);

  return header;

};

export default Header;