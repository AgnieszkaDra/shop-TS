import { HomePage, AdminPage, NotFoundPage } from "../pages/pages";

type Route = {
  path: string;
  component: () => string;
};

const routes: Route[] = [
  { path: "/", component: HomePage },
  { path: "/admin", component: AdminPage },
  { path: "/:category", component: () => `<h1>Category Page</h1>` }, 
];

function getRoute(path: string): Route | undefined {
  return routes.find((route) => {
   
    const regex = new RegExp(`^${route.path.replace(':category', '(\\w+)')}$`);
    return regex.test(path);
  });
}

export function navigate(path: string) {
  const route = getRoute(path);
  const content = document.getElementById("root");

  if (content) {
    content.innerHTML = route ? route.component() : NotFoundPage();
    window.history.pushState({}, "", path);
  }
}

window.addEventListener("popstate", () => {
  navigate(window.location.pathname);
});
