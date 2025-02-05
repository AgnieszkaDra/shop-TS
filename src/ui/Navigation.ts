
function Hamburger() {
  const hamburger = document.createElement('div');
  hamburger.classList.add('hamburger');
  hamburger.textContent = 'Hamburger'; // Add your hamburger content or icon here
  return hamburger;
}

function Menu({ navbarOpen, navbarOpenFunc }: { navbarOpen: boolean; navbarOpenFunc: () => void }) {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  if (navbarOpen) {
    nav.classList.add('open');
  }

  const menuItem = document.createElement('div');
  menuItem.textContent = 'Menu Item';
  nav.appendChild(menuItem);

  // Create a button to toggle navbar state
  const toggleButton = document.createElement('button');
  toggleButton.textContent = navbarOpen ? 'Close Navbar' : 'Open Navbar';
  toggleButton.addEventListener('click', navbarOpenFunc);

  nav.appendChild(toggleButton);

  return nav;
}

function render() {
  // Implement your render logic here
  console.log('Rendering the page...');
}

export const MainPage = (): HTMLDivElement => {
  let navbarOpen = false;

  const openNavbar = () => {
    navbarOpen = !navbarOpen; // Toggle navbar state
    render(); // Re-render the page to reflect the change
  };

  // Create the mobile navigation div and Hamburger component
  const mobileNav = document.createElement('div');
  mobileNav.classList.add('mobile-nav');
  mobileNav.appendChild(Hamburger());

  // Create the nav element and Menu component
  const nav = Menu({ navbarOpen, navbarOpenFunc: openNavbar });

  // Append the elements to the main content
  const mainContent = document.createElement('div');
  mainContent.appendChild(mobileNav);
  mainContent.appendChild(nav);

  return mainContent
}

export default MainPage