import '../styles/header.scss'
import MainPage from '../ui/Navigation';

export const BurgerMenu = (): HTMLElement => {
   
    const button = document.createElement("button");
    button.id = "burger-menu"; 
    button.classList.add("burger-menu");
    button.setAttribute("aria-label", "Toggle navigation");

    for (let i = 0; i < 3; i++) {
        const span = document.createElement("span");
        button.appendChild(span);
    }

    return button;
};

export default BurgerMenu;
  