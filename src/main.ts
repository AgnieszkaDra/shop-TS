import HomePage from './pages/HomePage'

import './styles/globals.scss'

async function renderApp() {
  const app = document.querySelector("#root");
  if (!app) return;

  app.innerHTML = ""; 

  const homePage = await HomePage()
  app.append(homePage);
}

function initApp() {
  renderApp();
}

document.addEventListener("DOMContentLoaded", initApp);


  

