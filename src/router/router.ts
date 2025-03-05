import { AdminPage, NotFoundPage } from "../pages/pages";

import { Cart, SelectedProduct, Products, UserAccount } from "../components";
import LoginWrapper from "../components/LoginWrapper";


type Route = {
  path: string;
  page?: () => string;
  component?: (param: string) => string | Promise<HTMLElement>;
  param?: string;
  params?: { [key: string]: string };
};

const routes: Route[] = [
  //{ path: "/", component: HomePage }, // to nie działa
  { path: "/index.html", component: async () => (await import("../pages/HomePage")).HomePage() },
  { path: "/admin", page: AdminPage },
  { path: "/cart", component: Cart }, 
  //{ path: "/category/Dziecko", component: async () => UserAccount() }, 
  { path: "/moje konto", component: async () => LoginWrapper('login') },
  { path: "/moje konto/:path", component: () => UserAccount() }, 
  { path: "/category/:category", component: Products },
  { path: "/product/:product", component: SelectedProduct },
];

function matchRoute(path: string): { route: Route, param?: string } | undefined {
  //let foundMatch = false;

  for (const route of routes) {
    if (!route.path.includes(":")) {
      //foundMatch = true; 
      if (route.path === path) return { route };
    } else {
      const pattern = route.path.replace(/:(\w+)/g, "([^/]+)");
      const regex = new RegExp(`^${pattern}$`);
      const match = path.match(regex);

      if (match) {
       return { route, param: match[1] };
      }
    }
  }
  return undefined;
}

export async function navigate(path: string) {
  const content = document.getElementById("root");
  if (!content) return;

  const matched = matchRoute(path);

  if (matched) {
    const { route, param } = matched;
   
    try {
      content.innerHTML = "";

      if (typeof route.component === 'function') {
        const component = await route.component(param || '');
        
        if (typeof component === 'string') {
          content.innerHTML = component;
        } else {

          content.appendChild(component);
        }
      }
      window.history.pushState({}, "", path);
      window.dispatchEvent(new Event("locationChange"));

    } catch (error) {
      console.error("Error loading component:", error);
      content.innerHTML = NotFoundPage();
    }
  } else {
    content.innerHTML = NotFoundPage();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  navigate(window.location.pathname);
});





