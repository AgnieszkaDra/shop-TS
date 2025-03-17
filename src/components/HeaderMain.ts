import BurgerMenu from '../ui/BurgerMenu';
import Navigation from '../ui/Navigation';
import BasketIcon from './BasketIcon';
import Header from './Header';
import { LoginUser } from './LoginUser';
import '../styles/header.scss';



export const HeaderMain = async (): Promise<HTMLElement> => { 
    const mobileWrapper = document.createElement("div");
    mobileWrapper.classList.add("header__mobile");

    const burgerMenu = BurgerMenu();
    const navMenu = Navigation();
    navMenu.classList.add("none");

    const wrapperAccount = document.createElement("div");
    wrapperAccount.className = "account__wrapper";

    burgerMenu.addEventListener("click", () => {
        mobileWrapper.classList.toggle("none");
        navMenu.classList.toggle("none");
    });

    // Handle async LoginUser()
    const login = await LoginUser();
    wrapperAccount.appendChild(login);

    const basket = BasketIcon();
    wrapperAccount.appendChild(basket);
    mobileWrapper.appendChild(burgerMenu);
    mobileWrapper.appendChild(wrapperAccount);

    const colorChoco = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-choco")
    .trim();

    const header = Header({
        backgroundColor: colorChoco,
        children: [navMenu, mobileWrapper],
        className: 'header-main'
    });

    return header;
};

export default HeaderMain;







// import BurgerMenu from '../ui/BurgerMenu';
// import Navigation from '../ui/Navigation';
// import BasketIcon from './BasketIcon';
// import LoginUser from './LoginUser';
// import '../styles/header.scss';

// export const Header = async (): Promise<HTMLElement> => { 
//     const header = document.createElement("header");
//     header.classList.add("header");

//     const mobileWrapper = document.createElement("div");
//     mobileWrapper.classList.add("header__mobile");

//     const burgerMenu = BurgerMenu();
//     const navMenu = Navigation();

//     navMenu.classList.add("none");

//     mobileWrapper.appendChild(burgerMenu);
//     header.appendChild(navMenu);
//     header.appendChild(mobileWrapper);

//     const wrapperAccount = document.createElement("div");
//     wrapperAccount.className = "account__wrapper";

//     burgerMenu.addEventListener("click", () => {
//         mobileWrapper.classList.toggle("none");
//         navMenu.classList.toggle("none");
//     });

//     const login = await LoginUser()
//     wrapperAccount.appendChild(login)
   
//     const basket = BasketIcon();
//     mobileWrapper.appendChild(wrapperAccount);
//     wrapperAccount.appendChild(basket);
    
//     return header;
// };

// export default Header;