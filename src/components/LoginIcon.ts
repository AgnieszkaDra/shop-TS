// import { navigate } from '../router/router';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import '../styles/header.scss';
// import loggedUser from '../api/loggedUser';

// export const LoginIcon = async (): Promise<HTMLElement>  => {
//     const userLog = localStorage.getItem('currentUser');
//     const loginLink = document.createElement("a");
//     loginLink.classList.add('loginIcon__link');
//     loginLink.setAttribute('id', 'loginIcon');
//     loginLink.href = `/moje konto`;

//     if(userLog){
        
//         loginLink.textContent = 'Moje konto';
       
//     } else {
//          loginLink.textContent = 'Logowanie';
       
//     }


//    // const userData = JSON.parse(userLog); // Parse the user data

//    // const updatedUser = await loggedUser(userData); // Pass the user object to loggedUser

//     const wrapper = document.createElement("div");
//     wrapper.className = 'loginIcon__wrapper';
  
//     // const loginLink = document.createElement("a");
//     // loginLink.classList.add('loginIcon__link');
//     // loginLink.setAttribute('id', 'loginIcon');
//     // loginLink.href = `/moje konto`;

//     const loginIcon = document.createElement('i');
//     loginIcon.classList.add('fas', 'fa-user');
//     loginIcon.style.fontSize = '1em';
    

//     loginLink.appendChild(loginIcon);
//     const user = document.createElement('div')
//     user.textContent = 'zalogowany jako'

//     wrapper.appendChild(loginLink);
 
//     loginLink.addEventListener("click", (event) => {
//         event.preventDefault();
           
//         const path = loginLink.getAttribute("href");
//             if (path) {
//                 navigate(path);
//             }
//         });
    
//              // console.log(updatedUser.name);

// return loginLink;
// };

// export default LoginIcon;

import { navigate } from "../router/router";
import loggedUser from "../api/loggedUser";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/header.scss";

export const LoginIcon = async (): Promise<HTMLElement> => {
  const userLog = localStorage.getItem("currentUser");
  let userData = userLog ? JSON.parse(userLog) : null;

  if (userData) {
    try {
      userData = await loggedUser(userData); // Ensure user data is fetched
    } catch (error) {
      console.error("Error fetching logged user:", error);
    }
  }

  const wrapper = document.createElement("div");
  wrapper.className = "loginIcon__wrapper";

  const loginLink = document.createElement("a");
  loginLink.classList.add("loginIcon__link");
  loginLink.setAttribute("id", "loginIcon");
  loginLink.href = "/moje konto";
  loginLink.textContent = userData ? "Moje konto" : "Logowanie";

//   const loginIcon = document.createElement("i");
//   loginIcon.classList.add("fas", "fa-user");
//   loginIcon.style.fontSize = "1em";

//   loginLink.appendChild(loginIcon);
  wrapper.appendChild(loginLink);

//   if (userData) {
//     const user = document.createElement("div");
//     user.textContent = `Zalogowany jako ${userData.name || "Nieznany użytkownik"}`;
//     wrapper.appendChild(user);
//   }

  loginLink.addEventListener("click", (event) => {
    event.preventDefault();
    const path = loginLink.getAttribute("href");
    if (path) navigate(path);
  });

  return wrapper;
};

export default LoginIcon;