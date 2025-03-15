import loggedUser from '../api/loggedUser';
import userList from '../fields/userList';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/main.scss';

export const UserAccount = async (): Promise<HTMLElement> => {
  const container = document.createElement('div');
  container.className = 'container';

  const userLog = localStorage.getItem("currentUser");
  let userData = userLog ? JSON.parse(userLog) : null;

  if (userData) {
    try {
      userData = await loggedUser(userData);
    } catch (error) {
      console.error("Error fetching logged user:", error);
    }
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'account';

  const panel = document.createElement('nav');
  panel.className = 'account__panel';

  const user = document.createElement('div');
  user.className = 'account__user';

  const loginIconWrapper = document.createElement('div');
  loginIconWrapper.className = 'account__user-icon';

  const loginIcon = document.createElement("i");
  loginIcon.classList.add("fas", "fa-user");
  loginIcon.style.fontSize = "1em";
  loginIconWrapper.appendChild(loginIcon);

  const userInfo = document.createElement('div');
  userInfo.className = 'account__user-info';

  userInfo.textContent = userData ? `Witaj, ${userData.name}` : "Witaj, Gościu";
  
  user.append(loginIconWrapper, userInfo);
  panel.appendChild(user);

  const titles: Record<string, string> = {
    '/moje konto/orders': 'Zamówienia',
    '/moje konto/details': 'Szczegóły konta',
    '/': 'Strona główna',
    //'/': '',
  };
  
  const currentPath = decodeURIComponent(window.location.pathname);
  const titleText = titles[currentPath] || 'Moje konto';
  
  const title = document.createElement('h2');
  title.className = 'title';
  title.textContent = titleText;
  
  const panelList = document.createElement('ul');
  panelList.className = 'account__list';

  userList.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'account__item';

    const link = document.createElement('a');
    link.className = 'account__link';
    link.href = item.href;
    link.textContent = item.name;

    link.addEventListener("click", (event: MouseEvent) => {
      
      if (item.name !== "Strona główna") {
        //event.preventDefault();
        if (item.name === 'Wyloguj'){
           localStorage.removeItem("currentUser");
        }
       
         if (event.target && event.target instanceof HTMLAnchorElement) {
       console.log(event.target.href);
       //navigate(event.target.href);
     } 
     
      }
    
      
    });

    listItem.appendChild(link);
    panelList.appendChild(listItem);
  });

  panel.appendChild(panelList);
  wrapper.append(panel);
  container.append(title, wrapper);

  return container;
};

export default UserAccount;