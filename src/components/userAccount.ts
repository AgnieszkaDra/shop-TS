import loggedUser from '../api/loggedUser';
import userList from '../fields/userList';
import { navigate } from '../router/router';
import { userListItem } from '../types/User';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/main.scss';

export const UserAccount = async (): Promise<HTMLElement> => {
  const container = document.createElement('div');
  container.className = 'container';

  const render = async () => {
    container.innerHTML = ""; 

    const userLog = localStorage.getItem("currentUser");
    console.log(userLog)
    let userData = userLog ? JSON.parse(userLog) : null;

    if (userData) {
      try {
        userData = await loggedUser(userData);
      } catch (error) {
        console.error("Error fetching logged user:", error);
      }
    }

    if (userData) {
      const wrapper = document.createElement('div');
      wrapper.className = 'account';

      const panel = document.createElement('nav')
      panel.className = 'account__panel';

      const user = document.createElement('div')
      user.className = 'account__user'

      const loginIconWrapper = document.createElement('div')
      loginIconWrapper.className = 'account__user-icon'
      const loginIcon = document.createElement("i");
      loginIcon.classList.add("fas", "fa-user");
      loginIcon.style.fontSize = "1em";
      loginIconWrapper.appendChild(loginIcon)

      const userInfo = document.createElement('div')
      userInfo.className = 'account__user-info'
    
      userInfo.textContent = `Witaj, ${userData.name} `
   
      user.append(loginIconWrapper, userInfo)

      panel.appendChild(user);
     

      const getTitleText = (path: string): string => {
        const decodedPath = decodeURIComponent(path);
       
        const titles: Record<string, string> = {
          '/moje konto/orders': 'Zamówienia',
          '/moje konto/details': 'Szczegóły konta',
          '/index.html': 'Strona główna',
        };
        return titles[decodedPath] || 'Moje konto';
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

          link.addEventListener("click", (event: Event) => {
            event.preventDefault();
            const path = link.getAttribute("href");
            if (path) {
              navigate(path);
            }
          });

          if (item.name === "Wyloguj") {
            link.addEventListener('click', (event) => {
              event.preventDefault();
              localStorage.removeItem("currentUser");
              const path = link.getAttribute("href");
              console.log(path)
            if (path) {
              navigate(path);
            }

              // setTimeout(() => {
              //   window.location.reload(); // Reload after navigation
              // }, 100)
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

      panel.appendChild(panelList)

      wrapper.appendChild(panel)
    
      container.appendChild(title);
      container.appendChild(wrapper);
    }
  };

  await render(); 

  window.addEventListener("locationChange", render); 

  return container;
};

export default UserAccount