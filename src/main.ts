import Header from "./components/Header";
import HeaderTop from "./components/HeaderTop";
import Main from "./components/Main";

import './styles/globals.scss'

async function renderApp() {
  const app = document.querySelector("#root");
  if (!app) return;

  app.innerHTML = ""; 

  const headerTop = HeaderTop();
  const header = Header();
  const main = await Main();

  app.append(headerTop, header, main);
}

function initApp() {
 renderApp();
}

document.addEventListener("DOMContentLoaded", initApp);



  

