import { navigate } from '../router/router';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/header.scss';

export const LoginIcon = (): HTMLElement  => {
    const wrapper = document.createElement("div");
    wrapper.className = 'loginIcon__wrapper';
  
    const loginLink = document.createElement("a");
    loginLink.classList.add('loginIcon__link');
    loginLink.setAttribute('id', 'loginIcon');
    loginLink.href = `/moje konto`;

    const loginIcon = document.createElement('i');
    loginIcon.classList.add('fas', 'fa-user');
    loginIcon.style.fontSize = '1em';
    

    loginLink.appendChild(loginIcon);
    const user = document.createElement('div')
    user.textContent = 'zalogowany jako'

    wrapper.appendChild(loginLink);
 
    loginLink.addEventListener("click", (event) => {
        event.preventDefault();
           
        const path = loginLink.getAttribute("href");
            if (path) {
                navigate(path);
            }
        });
    

return loginLink;
};

export default LoginIcon;