import Categories from '../pages/Categories';
import '../styles/main.scss';
import Carousel from './Carousel';

export const Main = async (): Promise<HTMLElement> => {
  const main = document.createElement("main");
  main.classList.add("main");

  const carousel = Carousel()
  const categories = Categories()
  
  main.appendChild(await carousel);
  main.appendChild(await categories);
  
  return main;
};

export default Main;
