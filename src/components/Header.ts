
import '../styles/header.scss';
import BurgerMenu from '../ui/BurgerMenu';
import Navigation from '../ui/Navigation';
import BasketIcon from './BasketIcon';
import LoginIcon from './LoginIcon';

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

  const actionsWrapper = document.createElement("div");
  actionsWrapper.className = 'actions'
  const basket = BasketIcon()
  const login = LoginIcon()

  actionsWrapper.appendChild(basket)
  actionsWrapper.appendChild(login)

  mobileWrapper.appendChild(actionsWrapper);
  
  header.appendChild(mobileWrapper);

  return header;

};

export default Header;