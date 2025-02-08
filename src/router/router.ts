import { HomePage, AboutPage, NotFoundPage } from "../pages/pages";


type Route = {
  path: string;
  component: () => string; 
};

const routes: Route[] = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
];


function getRoute(path: string): Route | undefined {
  return routes.find(route => route.path === path);
}

export function navigate(path: string) {
  const route = getRoute(path);

  if (route) {
    document.getElementById('content')!.innerHTML = route.component(); 
    window.history.pushState({}, '', path); 
  } else {
    document.getElementById('content')!.innerHTML = NotFoundPage(); 
    window.history.pushState({}, '', '/404'); 
  }
}


window.addEventListener('popstate', () => {
  const path = window.location.pathname;
  const route = getRoute(path);
  if (route) {
    document.getElementById('content')!.innerHTML = route.component();
  } else {
    document.getElementById('content')!.innerHTML = NotFoundPage();
  }
});