import '../styles/header.scss'
import BurgerMenu from '../ui/BurgerMenu'

export const Header = (): HTMLElement =>  {
    const header = document.createElement("header");
    header.classList.add("header");

    const mobileWrapper = document.createElement("div")
    mobileWrapper.classList.add("header-mobile")

    const burgerMenu = BurgerMenu();
    mobileWrapper.appendChild(burgerMenu)

    header.appendChild(mobileWrapper)
    
    return header;
}

export default Header
  
  