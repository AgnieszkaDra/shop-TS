import Categories from '../pages/Categories';
import Carousel from './Carousel';
import '../styles/main.scss';

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
