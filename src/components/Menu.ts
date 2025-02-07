import '../styles/header.scss';
import BurgerMenu from '../ui/BurgerMenu';
import Navigation from '../ui/Navigation';
import MenuItems from '../constants/categories';

export const Menu = (): HTMLElement => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("menu");

    const list = document.createElement("ul");
    list.classList.add("menu__list");

    MenuItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.classList.add("menu__item");

        const link = document.createElement("a");
        link.href = item.path;
        link.textContent = item.categoryName;
        link.classList.add("menu__link");

        listItem.appendChild(link);
        list.appendChild(listItem);
    });

    wrapper.appendChild(list);
  
    return wrapper;
};

export default Menu;
