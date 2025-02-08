import Header from "./components/Header";
import Main from "./components/Main";

async function renderApp() {
    const app = document.querySelector('#root');
    if (!app) return;
  
    const header = Header();
    const main = await Main();
    app.appendChild(header); 
    app.appendChild(main);
  }
  

  function initApp() {
    renderApp();
  }

import { navigate } from "./router/router";


document.addEventListener('DOMContentLoaded', () => {
  const initialPath = window.location.pathname;
  navigate(initialPath); 
});
 
  document.addEventListener('DOMContentLoaded', initApp);

 


  document.addEventListener('DOMContentLoaded', () => {
    const initialPath = window.location.pathname;
    navigate(initialPath); 
  });

