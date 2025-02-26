import LoginForm from "../pages/LoginForm";
import formFields from "../fields/formFields";
import RegisterForm from "../pages/RegisterForm";
import loggedUser from "../api/loggedUser";
import userList from "../fields/userList";
import { userListItem } from "../types/User";

export const LoginWrapper = async (type = ''): Promise<HTMLElement> => {
  const userLog = localStorage.getItem("currentUser");
  let userData = userLog ? JSON.parse(userLog) : null;

  if (userData) {
    try {
      userData = await loggedUser(userData); /
    } catch (error) {
      console.error("Error fetching logged user:", error);
    }
  }

  const container = document.createElement('div');
  container.className = 'container';

  const containerForms = document.createElement('div');
  containerForms.className = 'container__forms';

  if (type === 'register') {
    const backHomeLink = document.createElement('a');
    backHomeLink.className = 'container__link-home';
    backHomeLink.setAttribute('id', 'home');
    backHomeLink.href = `/index.html`;

    const backHome = document.createElement('h3');
    backHome.innerText = 'Strona główna';
    backHomeLink.appendChild(backHome);

    containerForms.appendChild(backHomeLink);
    containerForms.appendChild(RegisterForm(formFields));
  }


  if (userData) {
    const wrapper = document.createElement('div');
    wrapper.className = 'account';

    const panel = document.createElement('nav');
    panel.className = 'account__panel';

    const getTitleText = (path: string): string => {
      const titles: Record<string, string> = {
        '/moje-konto/orders': 'Zamówienia',
        '/moje-konto/details': 'Szczegóły konta',
        '/index.html': 'Strona główna',
      };
    
      return titles[path] || 'Moje konto';
    };

    const createTitle = (text: string): HTMLElement => {
      const title = document.createElement('h2');
      title.className = 'title';
      title.textContent = text;
      return title;
    };

    const createList = (items: userListItem[]): HTMLElement => {
      const panelList = document.createElement('ul');
      panelList.className = 'account__list';

      items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'account__item';

        const link = document.createElement('a');
        link.className = 'account__link';
        link.href = item.href;
        link.textContent = item.name;

        if (item.name === "Wyloguj") {
          link.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.removeItem("currentUser");
            window.location.reload(); 
          });
        }

        listItem.appendChild(link);
        panelList.appendChild(listItem);
      });

      return panelList;
    };

    const currentPath = window.location.pathname;
    const titleText = getTitleText(currentPath);
    const title = createTitle(titleText);

    const panelList = createList(userList);
    wrapper.appendChild(panelList);
    
    containerForms.appendChild(title);
    containerForms.appendChild(wrapper);

  } else {
  
    const backHomeLink = document.createElement('a');
    backHomeLink.className = 'container__link-home';
    backHomeLink.setAttribute('id', 'home');
    backHomeLink.href = `/index.html`;

    const backHome = document.createElement('h3');
    backHome.innerText = 'Strona główna';
    backHomeLink.appendChild(backHome);

    containerForms.appendChild(backHomeLink);
    containerForms.appendChild(LoginForm(formFields));
  }

  container.appendChild(containerForms);
  return container;
};

export default LoginWrapper;
