import Categories from '../pages/Categories';
import '../styles/main.scss';

export const Main = async (): Promise<HTMLElement> => {
  const main = document.createElement("main");
  main.classList.add("main");

  const categories = Categories()
  
  main.appendChild(await categories);

  return main;
};

export default Main;
