import '../styles/header.scss'
import BurgerClose from './BurgerClose';
import Menu from '../components/Menu';

export const Navigation = (): HTMLElement => {
   
    const nav = document.createElement("nav");
    nav.id = "menu-mobile"; 
    nav.classList.add("menu-mobile");
    const buttonCloseWrapper = document.createElement("div");
    buttonCloseWrapper.className = 'burger-close__wrapper'
    const buttonClose = BurgerClose()
    buttonCloseWrapper.appendChild(buttonClose)

    buttonClose.addEventListener("click", () => {
        const headerMobile = document.querySelector(".header__mobile") as HTMLElement;
    
        if (headerMobile) {
            headerMobile.classList.toggle("none");  
        }
        
        nav.classList.toggle("none"); 
    });

    const menu = Menu()
    nav.appendChild(buttonCloseWrapper)
    nav.appendChild(menu)

    return nav;
};

export default Navigation;
