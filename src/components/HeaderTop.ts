import '../styles/header.scss';
import BasketIcon from './BasketIcon';
import LoginIcon from './LoginIcon';
import UserAccount from './userAccount';

export const HeaderTop = (): HTMLElement => {
    const headerTop = document.createElement("div");
    headerTop.classList.add("header__top");

    const wrapperAccount = document.createElement("div");
    wrapperAccount.className = 'account__wrapper';
    
    const login = LoginIcon()
    const userAccount = UserAccount()
    const basket = BasketIcon()
    wrapperAccount.appendChild(login)
    wrapperAccount.appendChild(userAccount)
    wrapperAccount.appendChild(basket)
    headerTop.appendChild(wrapperAccount)
  
  
    return headerTop;
};

export default HeaderTop