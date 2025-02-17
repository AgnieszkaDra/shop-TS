import { navigateToLogin } from '../router/router';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/header.scss';

export const LoginIcon = (): HTMLElement => {
    const wrapper = document.createElement("div");
    wrapper.className = 'login__wrapper';
  
    const loginLink = document.createElement("a");
    loginLink.setAttribute('id', 'login');
    loginLink.href = `/login`;

    const loginIcon = document.createElement('i');
    loginIcon.classList.add('fas', 'fa-user');
    loginIcon.style.fontSize = '1.5em';

    loginLink.appendChild(loginIcon);
    wrapper.appendChild(loginLink);

    const findLinkToLogin = wrapper.querySelector('#login');

    if (findLinkToLogin) {
        findLinkToLogin.addEventListener("click", (event) => {
            event.preventDefault();
           
            const path = findLinkToLogin.getAttribute("href");

            if (path) {
                navigateToLogin(path);
            }
        });
    }

    return wrapper;
};

export default LoginIcon;