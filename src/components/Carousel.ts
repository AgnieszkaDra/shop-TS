import { CarouselImage } from '../types/Carouselmage';
import { CarouselButtons } from '../ui/CarouselButtons';
import '../styles/carousel.scss';

export const Carousel = async (images: CarouselImage[]): Promise<HTMLElement> => {
   
    const carousel = document.createElement("div");
    carousel.classList.add('carousel')
    carousel.setAttribute('id', 'carousel');
    carousel.setAttribute('araia-label', 'carousel');

    const linkWrapper = document.createElement("div");
    linkWrapper.classList.add('link__wrapper');
    const linkCarousel = document.createElement("a");
    linkCarousel.classList.add('link__carousel');
    linkWrapper.appendChild(linkCarousel);

    const carouselButtons = CarouselButtons()
    
    carousel.appendChild(linkWrapper);
    carousel.appendChild(carouselButtons.prevBtnWrapper);
    carousel.appendChild(carouselButtons.nextBtnWrapper);

    let currentSlide = 0;
    let interval = 5000;

    const updateSlide = () => {
        carousel.style.backgroundImage = `url('/assets/logo/${images[currentSlide].imageBackground}.jpg')`;
        carousel.style.backgroundSize = 'cover';
        linkCarousel.href = images[currentSlide].path; 
        linkCarousel.textContent = images[currentSlide].name;
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

export default Carousel;

