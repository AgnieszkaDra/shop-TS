import { HomePage, AdminPage, NotFoundPage } from "../pages/pages";
import { Category } from "../pages/Category";
import { Cart } from "../pages/Cart"; // Import the Cart page
import { Collection } from "../types/ProductsData";

type Route = {
  path: string;
  page?: () => string;
  component?: (category: Collection) => Promise<HTMLElement>;
  component2?: () => Promise<HTMLElement>; // Added the correct typing for component2
  param?: string; // Added param property to the Route type
};

const routes: Route[] = [
  { path: "/", page: HomePage },
  { path: "/admin", page: AdminPage },
  { path: "/:category", component: Category },
  { path: "/cart", component2: Cart }, // Use component2 for Cart
];

function getRoute(path: string): Route | undefined {
  for (const route of routes) {
    // Adjust the regex to match category and cart
    const regex = new RegExp(`^${route.path.replace(":category", "(\\w+)")}$`);
    const match = path.match(regex);
    console.log(regex);

    if (match) {
      return { ...route, param: match[1] }; // The param is only set for the category
    }
  }
  return undefined;
}

function getRoute2(path: string): Route | undefined {
  return routes.find(route => route.path === path);
}

export async function navigate(path: string) {
  console.log(path);
  const route = getRoute(path);
  
  const content = document.getElementById("root");

  if (content) {
    if (route) {
      if (route.component && route.param) {
        route.component(route.param as Collection) // Pass param for category, otherwise undefined
          .then(component => {
            content.innerHTML = "";
            content.appendChild(component);
          })
          .catch((error) => {
            console.error("Error loading component:", error); // Log the error for debugging
            content.innerHTML = NotFoundPage();
          });
      } else if (route.component2) { // Check for component2 for the Cart route
        route.component2()
          .then(component => {
            content.innerHTML = "";
            content.appendChild(component);
          })
          .catch((error) => {
            console.error("Error loading Cart component:", error); // Log the error for debugging
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
  const route = getRoute2(path);
  const content = document.getElementById("root");

  if (content) {
    if (route) {
      if (route.component2) {
        // Await the promise and handle Cart component rendering
        try {
          const component = await route.component2();
          content.innerHTML = "";
          content.appendChild(component);
        } catch (error) {
          console.error("Error loading Cart component:", error); // Log the error for debugging
          content.innerHTML = NotFoundPage();
        }
      } else {
        content.innerHTML = "<h1>404 - Page Not Found</h1>"; // If no component2 is found
      }
    } else {
      content.innerHTML = "<h1>404 - Page Not Found</h1>"; // If no route matches
    }

    // Update the browser history
    window.history.pushState({}, "", path);
  }
}

window.addEventListener("popstate", () => {
  navigate(window.location.pathname);
});