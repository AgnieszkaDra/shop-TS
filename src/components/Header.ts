import { navigate } from '../router/router';
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

  const nav = document.createElement('nav');
  
 
  const homeLink = document.createElement('a');
  homeLink.href = "/";
  homeLink.textContent = "Home";
  homeLink.addEventListener("click", (event) => handleClick(event, "/"));


  const aboutLink = document.createElement('a');
  aboutLink.href = "/about";
  aboutLink.textContent = "About";
  aboutLink.addEventListener("click", (event) => handleClick(event, "/about"));


  nav.appendChild(homeLink);
  nav.appendChild(aboutLink);


  header.appendChild(nav);

  mobileWrapper.appendChild(burgerMenu);
  header.appendChild(navMenu);
  header.appendChild(mobileWrapper);

  return header;
};


function handleClick(event: MouseEvent, path: string) {
  event.preventDefault(); 
  navigate(path);
}

export default Header;
  
  