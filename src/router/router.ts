import { HomePage, AdminPage, NotFoundPage } from "../pages/pages";
import { Category } from "../pages/Category";
import { Cart } from "../pages/Cart"; 
import { Collection } from "../types/ProductsData";
import { LoginForm } from "../pages/LoginForm";
import { InputField } from "../types/InputField";
import formFields from "../fields/formFields";

type Route = {
  path: string;
  page?: () => string;
  component?: (category: Collection) => Promise<HTMLElement>;
  component2?: () => Promise<HTMLElement>; 
  component3?: (inputs: InputField[]) => HTMLElement;
  param?: string;
};

const routes: Route[] = [
  { path: "/", page: HomePage },
  { path: "/admin", page: AdminPage },
  { path: "/:category", component: Category },
  { path: "/cart", component2: Cart }, 
  { path: "/moje konto", component3: LoginForm},
  ];

function getRoute(path: string): Route | undefined {
  for (const route of routes) {
 
    const regex = new RegExp(`^${route.path.replace(":category", "(\\w+)")}$`);
    const match = path.match(regex);
    console.log(regex);

    if (match) {
      return { ...route, param: match[1] };
    }
  }
  return undefined;
}

function getMainRoute(path: string): Route | undefined {
  return routes.find(route => route.path === path);
}

function getMainRoute2(path: string): Route | undefined {
  return routes.find(route => route.path === path);
}

export async function navigate(path: string) {
  console.log(path);
  const route = getRoute(path);
  
  const content = document.getElementById("root");

  if (content) {
    if (route) {
      if (route.component && route.param) {
        route.component(route.param as Collection) 
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
      if (route.component2) {
        try {
          content.innerHTML = ""; 

         
            const component2 = await route.component2();
            content.appendChild(component2);
   

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
  alert('register')
  const route = getMainRoute2(path);
  const content = document.getElementById("root");

  if (content) {
    if (route) {
      if (route.component3) { 
        try {
          content.innerHTML = ""; 

         
            const component3 = route.component3(formFields);
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
  navigate(window.location.pathname);
});