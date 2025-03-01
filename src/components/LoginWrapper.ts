import UserAccount from "./UserAccount.ts";
import LoginForm from "./LoginForm";
import formFields from "../fields/formFields";
import RegisterForm from "./RegisterForm";
//import loggedUser from "../api/loggedUser";


export const LoginWrapper = async (type = ''): Promise<HTMLElement> => {
  const userLog = localStorage.getItem("currentUser");
  let userData = userLog ? JSON.parse(userLog) : null;

  // if (userData) {
  //   try {
  //     userData = await loggedUser(userData); 
  //   } catch (error) {
  //     console.error("Error fetching logged user:", error);
  //   }
  // }

  const container = document.createElement('div');
  container.className = 'container';

  if (type === 'register') {
    const backHomeLink = document.createElement('a');
    backHomeLink.className = 'container__link-home';
    backHomeLink.setAttribute('id', 'home');
    backHomeLink.href = `/index.html`;

    const backHome = document.createElement('h3');
    backHome.innerText = 'Strona główna';
    backHomeLink.appendChild(backHome);

    const containerForms = document.createElement('div');
    containerForms.className = 'container__forms';

    containerForms.appendChild(backHomeLink);
    containerForms.appendChild(RegisterForm(formFields));
    container.appendChild(containerForms);
  }


  if (userData) {
    const user = await UserAccount()
    container.appendChild(user)

    
  } else {
  
    const backHomeLink = document.createElement('a');
    backHomeLink.className = 'container__link-home';
    backHomeLink.setAttribute('id', 'home');
    backHomeLink.href = `/index.html`;

    const backHome = document.createElement('h3');
    backHome.innerText = 'Strona główna';
    backHomeLink.appendChild(backHome);

    const containerForms = document.createElement('div');
    containerForms.className = 'container__forms';

    containerForms.appendChild(backHomeLink);
    containerForms.appendChild(LoginForm(formFields));
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