import LoginForm from "./LoginForm";
import formFields from "../fields/formFields";
import RegisterForm from "./RegisterForm";
import UserAccount from "./UserAccount";

const LoginWrapper = async (type = ''): Promise<HTMLElement> => {
  const container = document.createElement('div');
  container.className = 'container';

  const userLog = localStorage.getItem("currentUser");
  let userData = userLog ? JSON.parse(userLog) : null;

  if (type === 'register') {
    const backHomeLink = document.createElement('a');
    backHomeLink.className = 'container__link-home';
    backHomeLink.href = `/index.html`;

    const backHome = document.createElement('h3');
    backHome.innerText = 'Strona główna';
    backHomeLink.appendChild(backHome);

    const containerForms = document.createElement('div');
    containerForms.className = 'container__forms';

    containerForms.append(backHomeLink, RegisterForm(formFields));
    container.appendChild(containerForms);
  } else if (userData) {
    const user = await UserAccount();
    container.appendChild(user);
  } else {
    const backHomeLink = document.createElement('a');
    backHomeLink.className = 'container__link-home';
    backHomeLink.href = `/index.html`;

    const backHome = document.createElement('h3');
    backHome.innerText = 'Strona główna';
    backHomeLink.appendChild(backHome);

    const containerForms = document.createElement('div');
    containerForms.className = 'container__forms';
    //containerForms.classList.add('container')

    containerForms.append(backHomeLink, LoginForm(formFields));
    container.appendChild(containerForms);
  }

  return container;
};

export default LoginWrapper;







  

    

 

//     wrapper.appendChild(panelList)
    

//     containerForms.appendChild(title)
//     containerForms.appendChild(wrapper)

//     } catch (error) {
//       console.error("Error fetching logged user:", error);
//     }
//   } else {


//   const backHomeLink = document.createElement('a');
//   backHomeLink.className = 'container__link-home'
//   backHomeLink.setAttribute('id', 'home');
//   backHomeLink.href = `/index.html`;

//   const backHome = document.createElement('h3');
//   backHome.innerText = 'Strona główna'
//   backHomeLink.appendChild(backHome);

//   containerForms.appendChild(backHomeLink)
//   containerForms.appendChild(LoginForm(formFields));
//   }

 

//   container.appendChild(containerForms)

//   return container;
// };

// export default LoginWrapper;