import CarouselImages from '../api/carouselImages'
import { CarouselImage } from '../types/Carouselmage';
import '../styles/carousel.scss';

export const Carousel = async (): Promise<HTMLElement> => {
    const images: CarouselImage[] = await CarouselImages();
    
    const carousel = document.createElement("div");
    carousel.classList.add('carousel')
    carousel.setAttribute('id', 'carousel');
    carousel.setAttribute('araia-label', 'carousel');

    const linkWrapper = document.createElement("div");
    linkWrapper.classList.add('link__wrapper');
    const linkCarousel = document.createElement("a");
    linkCarousel.classList.add('link__carousel');
    linkWrapper.appendChild(linkCarousel);

    const prevBtnWrapper = document.createElement("div");
    prevBtnWrapper.classList.add('carousel__button-wrapper', 'prevBtn');
    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel__button prevBtn';
    prevBtn.id = 'prevBtn';
    prevBtn.innerHTML = '&lt';
    prevBtnWrapper.appendChild(prevBtn);

    const nextBtnWrapper = document.createElement("div");
    nextBtnWrapper.classList.add('carousel__button-wrapper', 'nextBtn');
    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel__button nextBtn';
    nextBtn.id = 'nextBtn';
    nextBtn.innerHTML = '&gt';
    nextBtnWrapper.appendChild(nextBtn);

    carousel.appendChild(linkWrapper);
    carousel.appendChild(prevBtnWrapper);
    carousel.appendChild(nextBtnWrapper);

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
      
      prevBtn.addEventListener('click', () => {
        goToPrevSlide();
        resetTimer();
      });
      
      nextBtn.addEventListener('click', () => {
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
