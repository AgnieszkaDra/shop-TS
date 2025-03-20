import BurgerMenu from "../../ui/elements/burgers/BurgerMenu";
import Navigation from "../../ui/Navigation";

export const MobileSection = () => {

    const mobileWrapper = document.createElement("div");
    mobileWrapper.classList.add("header__mobile");

    const burgerMenu = BurgerMenu();
    const navMenu = Navigation();
   
    burgerMenu.addEventListener("click", () => {
        mobileWrapper.classList.toggle("none");
        navMenu.classList.toggle("none");
    });

    mobileWrapper.appendChild(navMenu);
    mobileWrapper.appendChild(burgerMenu);
    
    return {navMenu, mobileWrapper}

}




