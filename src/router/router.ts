import { HomePage, AdminPage, NotFoundPage } from "../pages/pages";
import { Category } from "../pages/Category";
import { Collection } from "../types/ProductsData";

type Route = {
  path: string;
  page?: () => string;
  component?: (category: Collection) => Promise<HTMLElement>;
};

const routes: Route[] = [
  { path: "/", page: HomePage },
  { path: "/admin", page: AdminPage },
  { path: "/:category", component: Category },
];

function getRoute(path: string) {
  for (const route of routes) {
    const regex = new RegExp(`^${route.path.replace(":category", "(\\w+)")}$`);
    const match = path.match(regex);

    if (match) {
      return { ...route, param: match[1] }; 
    }
  }
  return undefined;
}

export function navigate(path: string) {
  const route = getRoute(path);
  const content = document.getElementById("root");

  if (content) {
    if (route) {
      if (route.component && route.param) {  
        route.component(route.param as Collection).then(component => { 
          content.innerHTML = "";
          content.appendChild(component);
        }).catch(() => {
          content.innerHTML = NotFoundPage();
        });
      } else {
        content.innerHTML = route.page?.() || NotFoundPage();
      }
    } else {
      content.innerHTML = NotFoundPage();
    }

    window.history.pushState({}, "", path);
  }
}

window.addEventListener("popstate", () => {
  navigate(window.location.pathname);
});