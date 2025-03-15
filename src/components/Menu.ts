import '../styles/header.scss';
import MenuItems from '../constants/menuItems';
import { navigate } from '../router/router';
import LoginUser from './LoginUser';

export const Menu = async (): Promise<HTMLElement> => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("menu");

    const list = document.createElement("ul");
    list.classList.add("menu__list");

    MenuItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.classList.add("menu__item");

        const link = document.createElement("a");
        link.href = item.path;
        link.textContent = item.name;
        link.classList.add("menu__link");

        if(item.name !== 'Strona główna') {
            link.addEventListener("click", (event: Event) => {
                event.preventDefault();
                
                let path = link.getAttribute("href");
                    if (path) {
                    navigate(`/category${path}`);
                }
                });
            }
        listItem.appendChild(link);
        list.appendChild(listItem);
    });

    const login = await LoginUser();
    login.classList.add('menu__login')

    wrapper.appendChild(list);
    wrapper.appendChild(login);

    return wrapper;
};

export default Menu;

