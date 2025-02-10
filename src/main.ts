import Header from "./components/Header";
import Main from "./components/Main";
import { navigate } from "./router/router";

async function renderApp() {
  const app = document.querySelector("#root");
  if (!app) return;

  app.innerHTML = ""; 

  const header = Header();
  const main = await Main();
  console.log(document.querySelector("a[href='/cart']"));
  app.append(header, main);
}

function initApp() {
  const initialPath = window.location.pathname;
  console.log(initialPath)
  navigate(initialPath);
  renderApp();
}

document.addEventListener("DOMContentLoaded", initApp);


  

