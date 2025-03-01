import '../styles/header.scss';
import MenuItems from '../constants/categories';
import { navigate } from '../router/router';

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

      link.addEventListener("click", (event: Event) => {
          event.preventDefault();
          const path = link.getAttribute("href");
          
          if (path) {
            navigate(path);
          }
        });

    listItem.appendChild(link);
    list.appendChild(listItem);
  });

  wrapper.appendChild(list);

  return wrapper;
};

export default Menu;


