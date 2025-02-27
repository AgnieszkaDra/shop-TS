
import '../styles/header.scss';
import BurgerMenu from '../ui/BurgerMenu';
import Navigation from '../ui/Navigation';
import BasketIcon from './BasketIcon';
import LoginIcon from './LoginIcon';


export const Header = async (): Promise<HTMLElement> => {
  const header = document.createElement("header");
  header.classList.add("header");

  const headerTop = document.createElement("div");
  headerTop.classList.add("header__top");

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
  wrapperAccount.className = "account__wrapper";

  const login = await LoginIcon(); 
  const basket = BasketIcon();

  wrapperAccount.appendChild(login);
  wrapperAccount.appendChild(basket);
  mobileWrapper.appendChild(wrapperAccount);

  header.appendChild(mobileWrapper);

  return header;
};

export default Header;