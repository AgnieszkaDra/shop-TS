
import '../styles/header.scss';
import BurgerMenu from '../ui/BurgerMenu';
import Navigation from '../ui/Navigation';
import { BasketIcon } from './BasketIcon';
import { LoginIcon } from './LoginIcon';
import UserAccount from './userAccount';

export const Header = (): HTMLElement => {
  const header = document.createElement("header");
  header.classList.add("header");

  const mobileWrapper = document.createElement("div");
  mobileWrapper.classList.add("header__mobile");

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

  const wrapperAccount = document.createElement("div");
  wrapperAccount.className = 'account__wrapper';

  const login = LoginIcon()
  const userAccount = UserAccount()
  wrapperAccount.appendChild(login)
  wrapperAccount.appendChild(userAccount)

  const basket = BasketIcon()
  
  mobileWrapper.appendChild(wrapperAccount);
 
  const basketWrapper = document.createElement('div')
  basketWrapper.className = 'header__basket'
  basketWrapper.appendChild(basket)
  header.appendChild(mobileWrapper);
  header.appendChild(basketWrapper);

  return header;

};

export default Header;