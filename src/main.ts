import Header from "./components/Header";

function renderApp() {
    const app = document.querySelector('#root');
    if (!app) return;
  
    const header = Header();
    app.appendChild(header); 
  }
  

  function initApp() {
    renderApp();
  }
 
  document.addEventListener('DOMContentLoaded', initApp);

