import { CarouselImage } from '../types/Carouselmage';
import { CarouselButtons } from '../ui/CarouselButtons';
import '../styles/carousel.scss';

export const CarouselProducts = async (images: CarouselImage[]): Promise<HTMLElement> => {
   
    const carousel = document.createElement("div");
    carousel.classList.add('carousel')
    carousel.setAttribute('id', 'carousel');
    carousel.setAttribute('araia-label', 'carousel');

    const carouselButtons = CarouselButtons()
        
    carousel.appendChild(carouselButtons.prevBtnWrapper);
    carousel.appendChild(carouselButtons.nextBtnWrapper);

    let currentSlide = 0;
    let interval = 5000;

    const updateSlide = () => {
      carousel.style.backgroundImage = `url('/assets/${images[currentSlide]}.jpg`;
      carousel.style.backgroundSize = 'cover';
    };

    const goToPrevSlide = () => {
        currentSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
        updateSlide();
      };
      
      const goToNextSlide = () => {
        currentSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
        updateSlide();
      };
      
      let slideTimer = setInterval(goToNextSlide, interval);
      
      carouselButtons.prevBtnWrapper.addEventListener('click', () => {
        goToPrevSlide();
        resetTimer();
      });
      
      carouselButtons.nextBtnWrapper.addEventListener('click', () => {
        goToNextSlide();
        resetTimer();
      });
      
      const resetTimer = () => {
        clearInterval(slideTimer);
        slideTimer = setInterval(goToNextSlide, interval);
      };

    updateSlide();

    return carousel;
};

export default CarouselProducts;
