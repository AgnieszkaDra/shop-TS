//import '../styles/header.scss'
//import BurgerClose from './BurgerClose';

export const BurgerMenu = (): HTMLElement => {
    const button = document.createElement("button");
    button.id = "burger-menu";
    button.classList.add("burger-menu");
    button.setAttribute("aria-label", "Toggle navigation");

    for (let i = 0; i < 3; i++) {
        const span = document.createElement("span");
        button.appendChild(span);
    }

    // button.addEventListener("click", () => {
    //     BurgerClose()
    // });

    return button;
};

export default BurgerMenu;
  