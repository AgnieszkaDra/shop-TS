import BurgerMenu from '../ui/BurgerMenu';
import Navigation from '../ui/Navigation';
import BasketIcon from './BasketIcon';
import LoginIcon from './LoginIcon';
import '../styles/header.scss';

export const Header = async (): Promise<HTMLElement> => { 
  const header = document.createElement("header");
  header.classList.add("header");

  const mobileWrapper = document.createElement("div");
  mobileWrapper.classList.add("header__mobile");

  const burgerMenu = BurgerMenu();
  const navMenu = Navigation();

  navMenu.classList.add("none");

  mobileWrapper.appendChild(burgerMenu);
  header.appendChild(navMenu);
  header.appendChild(mobileWrapper);

  const wrapperAccount = document.createElement("div");
  wrapperAccount.className = "account__wrapper";

  burgerMenu.addEventListener("click", () => {
    mobileWrapper.classList.toggle("none");
    navMenu.classList.toggle("none");
  });

  const login = await LoginIcon(); 
  const basket = BasketIcon();

  wrapperAccount.appendChild(login);
  wrapperAccount.appendChild(basket);
  mobileWrapper.appendChild(wrapperAccount);

  header.appendChild(mobileWrapper);

  return header;
};

export default Header;