import { HomePage, AdminPage, NotFoundPage } from "../pages/pages";
import { Cart } from "../pages/Cart"; 
import { Collection, MainCollection, ProductName } from "../types/ProductsData";
import LoginWrapper from "../components/LoginWrapper";
import SelectedProduct from "../pages/SelectedProduct";
import { Products } from "../pages/Products";

type Route = {
  path: string;
  page?: () => string;
  componentProducts?: (category: Collection) => Promise<HTMLElement>;
  componentCart?: () => Promise<HTMLElement>; 
  componentLogin?: () => HTMLElement; 
  component4?: (category: MainCollection) => HTMLElement;
  componentSelectedProduct?: (product: ProductName) => Promise<HTMLElement>
  param?: string;
  params?: { [key: string]: string };
};

const routes: Route[] = [
  { path: "/", page: HomePage },
  { path: "/admin", page: AdminPage },
  { path: "/:category", componentProducts: Products },
  { path: "/cart", componentCart: Cart }, 
  { path: "/login", componentLogin: () => LoginWrapper('login') },
  { path: "/:product", componentSelectedProduct: SelectedProduct },
];

function getRoute(path: string): Route | undefined {
  for (const route of routes) {
    const regex = new RegExp(`^${route.path.replace(":category", "(\\w+)")}$`);
    const match = path.match(regex);

   if (match) {
      return { ...route, param: match[1] };
    }
  }
  console.log("No matching route found.");
  return undefined;
}

function getRouteProduct(path: string): Route | undefined {
  for (const route of routes) {
    const regex = new RegExp(`^${route.path.replace(":product", "(\\w+)")}$`);
    const match = path.match(regex);

    if (match) {
      return { ...route, param: match[1] };
    }
  }
  console.log("No matching route found.");
  return undefined;
}

function getMainRoute(path: string): Route | undefined {
  return routes.find(route => route.path === path);
}

export async function navigateCategories(path: string) {
  const route = getRoute(path);
  const content = document.getElementById("root");

  if (content) {
    if (route) {
      if (route.componentProducts && route.param) {
          route.componentProducts(route.param as Collection)
          .then(component => {
            content.innerHTML = "";
            content.appendChild(component);
          })
          .catch((error) => {
            console.error("Error loading component:", error); 
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

export async function navigateProduct(path: string) {
  const route = getRouteProduct(path);
  const content = document.getElementById("root");

  if (content) {
    if (route) {
      if (route.componentSelectedProduct && route.param) {
        route.componentSelectedProduct(route.param as ProductName)
          .then(component => {
            content.innerHTML = "";
            content.appendChild(component);
          })
          .catch((error) => {
            console.error("Error loading component:", error); 
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

export async function navigateComponent(path: string) {
  const route = getMainRoute(path);
  const content = document.getElementById("root");

  if (content) {
    if (route) {
      if (route.componentCart) {
        try {
          content.innerHTML = ""; 
          const componentCart = await route.componentCart();
          content.appendChild(componentCart);
        } catch (error) {
          console.error("Error loading component:", error);
          content.innerHTML = NotFoundPage();
        }
      } else {
        content.innerHTML = "<h1>404 - Page Not Found</h1>"; 
      }
    } else {
      content.innerHTML = "<h1>404 - Page Not Found</h1>";
    }
    window.history.pushState({}, "", path);
  }
}

export async function navigateToLogin(path: string) {
 
  const route = getMainRoute(path);
  const content = document.getElementById("root");

  if (content) {
    if (route) {
      if (route.componentLogin) { 
        try {
          content.innerHTML = ""; 
          const component3 = route.componentLogin();
          content.appendChild(component3);
        } catch (error) {
          console.error("Error loading component:", error);
          content.innerHTML = NotFoundPage();
        }
      } else {
        content.innerHTML = "<h1>404 - Page Not Found</h1>"; 
      }
    } else {
      content.innerHTML = "<h1>404 - Page Not Found</h1>"; 
    }

    window.history.pushState({}, "", path);
  }
}

window.addEventListener("popstate", () => {
  navigateCategories(window.location.pathname);
});


