import '../styles/header.scss';
import BurgerMenu from '../ui/BurgerMenu';
import Navigation from '../ui/Navigation';
import BasketIcon from './BasketIcon';
import Header from './Header';
import LoginUser from './LoginUser';

export const HeaderProducts = async (): Promise<HTMLElement> => { 
    const mobileWrapper = document.createElement("div");
    mobileWrapper.classList.add("header__mobile");
    mobileWrapper.classList.add("header__mobile--products")

    const burgerMenu = BurgerMenu();
    const navMenu = Navigation();
    navMenu.classList.add("none");

    const wrapperAccount = document.createElement("div");
    wrapperAccount.className = "account__wrapper";

    burgerMenu.addEventListener("click", () => {
        mobileWrapper.classList.toggle("none");
        navMenu.classList.toggle("none");
    });

    const logo = document.createElement("img");
    logo.src = "../../public/assets/logo/logo-dziecko.jpg"; // Replace with your actual logo path
    logo.alt = "logo";
    logo.classList.add("header__mobile--products__logo")
   

    // Handle async LoginUser()
    const login = await LoginUser();
    wrapperAccount.appendChild(login);

    const basket = BasketIcon();
    wrapperAccount.appendChild(basket);
    mobileWrapper.appendChild(logo)
    mobileWrapper.appendChild(burgerMenu);
    mobileWrapper.appendChild(wrapperAccount);

    const colorWhite = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-white")
    .trim();

    const header = Header({
        backgroundColor: colorWhite,
        children: [navMenu, mobileWrapper],
        className: 'header-products'
    });

    return header;
};

export default HeaderProducts;









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