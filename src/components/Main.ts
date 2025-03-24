import Categories from './Categories';
import Carousel from '../ui/carousel/Carousel';
import fetchLogoImages from '../api/fetchLogoImages';
import { CarouselImage } from '../types/Carousellmage';
import '../styles/main.scss';

export const Main = async (): Promise<HTMLElement> => {
  const main = document.createElement("main");
  main.classList.add("main");

  const images: CarouselImage[] = await fetchLogoImages();
  console.log(images)
  const carousel = Carousel({ images, variant: 'main' })

  const categories = Categories()
  
  main.appendChild(await carousel);
  main.appendChild(await categories);
  
  return main;
};

export default Main;
