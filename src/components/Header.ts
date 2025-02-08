import { navigate } from '../router/router';
import '../styles/header.scss';
import BurgerMenu from '../ui/BurgerMenu';
import Navigation from '../ui/Navigation';

export const Header = (): HTMLElement => {
  const header = document.createElement("header");
  header.classList.add("header");

  const mobileWrapper = document.createElement("div");
  mobileWrapper.classList.add("header-mobile");

  const burgerMenu = BurgerMenu();
  const navMenu = Navigation();

  navMenu.classList.add("none");

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("none");
    navMenu.classList.toggle("none");
  });



  // Mobile header behavior
  mobileWrapper.appendChild(burgerMenu);
  header.appendChild(navMenu);
  header.appendChild(mobileWrapper);

  return header;
};

// Helper function to create navigation links


export default Header;

// import { navigate } from '../router/router'; 
// import '../styles/header.scss'; 
// import BurgerMenu from '../ui/BurgerMenu'; 
// import Navigation from '../ui/Navigation';

// export const Header = (): HTMLElement => {
//   const header = document.createElement("header");
//   header.classList.add("header");

//   const mobileWrapper = document.createElement("div");
//   mobileWrapper.classList.add("header-mobile");

//   const burgerMenu = BurgerMenu();
//   const navMenu = Navigation();

//   navMenu.classList.add("none");

//   burgerMenu.addEventListener("click", () => {
//     burgerMenu.classList.toggle("none");
//     navMenu.classList.toggle("none");
//   });

//   const nav = document.createElement('nav');

//   const homeLink = document.createElement('a');
//   homeLink.href = "/";  // Update this for routing
//   homeLink.textContent = "Home";
//   homeLink.addEventListener("click", (event) => handleClick(event, "/"));

//   const aboutLink = document.createElement('a');
//   aboutLink.href = "/admin";  // Update this for routing
//   aboutLink.textContent = "Admin";
//   aboutLink.addEventListener("click", (event) => handleClick(event, "/admin"));

//   // Append the links to the navigation
//   nav.appendChild(homeLink);
//   nav.appendChild(aboutLink);

//   // Append everything to the header
//   header.appendChild(nav);

//   // Mobile header behavior
//   mobileWrapper.appendChild(burgerMenu);
//   header.appendChild(navMenu);
//   header.appendChild(mobileWrapper);

//   return header;
// };

// // Improved handleClick function
// function handleClick(event: MouseEvent, path: string) {
//   event.preventDefault(); // Prevent the default link behavior
//   navigate(path);         // Call navigate function to update the route
// }

// export default Header;
  