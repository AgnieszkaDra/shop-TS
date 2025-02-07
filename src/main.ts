import Header from "./components/Header";
import Main from "./components/Main";

function renderApp() {
    const app = document.querySelector('#root');
    if (!app) return;
  
    const header = Header();
    const main = Main()
    app.appendChild(header); 
    app.appendChild(main)
  }
  

  function initApp() {
    renderApp();
  }
 
  document.addEventListener('DOMContentLoaded', initApp);

