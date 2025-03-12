import BurgerClose from './BurgerClose';
import Menu from '../components/Menu';
import '../styles/header.scss';

export const Navigation = (): HTMLElement => {
    const nav = document.createElement("nav");
    nav.id = "menu-mobile"; 
    nav.classList.add("menu-mobile");

    const buttonCloseWrapper = document.createElement("div");
    buttonCloseWrapper.className = 'burger-close__wrapper';

    const buttonClose = BurgerClose();
    buttonCloseWrapper.appendChild(buttonClose);

    buttonClose.addEventListener("click", () => {
        const headerMobile = document.querySelector(".header__mobile") as HTMLElement | null;
        if (headerMobile) {
            headerMobile.classList.toggle("none");
        }
        nav.classList.toggle("none");
    });

    nav.appendChild(buttonCloseWrapper);

    Menu().then(menu => {
        nav.appendChild(menu);
    });

    return nav;
};

export default Navigation;
