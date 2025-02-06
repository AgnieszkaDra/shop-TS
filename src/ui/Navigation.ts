import '../styles/header.scss'
import BurgerClose from './BurgerClose';

export const Navigation = (): HTMLElement => {
   
    const nav = document.createElement("nav");
    nav.id = "menu-mobile"; 
    nav.classList.add("menu-mobile");
    const buttonClose =  BurgerClose()

    buttonClose.addEventListener("click", () => {
        const burgerMenu = document.querySelector("#burger-menu") as HTMLElement;
    
        if (burgerMenu) {
            burgerMenu.classList.toggle("none");  
        }
        
        nav.classList.toggle("none"); 
    });
    nav.appendChild(buttonClose)

    return nav;
};

export default Navigation;
