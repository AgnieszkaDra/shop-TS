import Header from "./components/Header";

import Main from "./components/Main";

import './styles/globals.scss'

async function renderApp() {
  const app = document.querySelector("#root");
  if (!app) return;

  app.innerHTML = ""; 

  //const headerTop = HeaderTop();
  const header = await Header();
  const main = await Main();

  app.append(header, main);
}

function initApp() {
 renderApp();
}

document.addEventListener("DOMContentLoaded", initApp);




  

