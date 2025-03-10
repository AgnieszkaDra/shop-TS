import Categories from './Categories';
import '../styles/main.scss';
import Carousel from './Carousel';
import CarouselImages from '../api/carouselImages';
import { CarouselImage } from '../types/Carouselmage';

export const Main = async (): Promise<HTMLElement> => {
  const main = document.createElement("main");
  main.classList.add("main");

  const images: CarouselImage[] = await CarouselImages();
  
  const carousel = Carousel(images)
  const categories = Categories()
  
  main.appendChild(await carousel);
  main.appendChild(await categories);
  
  return main;
};

export default Main;
