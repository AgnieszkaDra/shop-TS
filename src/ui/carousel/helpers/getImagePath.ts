import { CarouselImage } from "../../../types/Carouselmage";

export const getImagePath = (image: CarouselImage, variant: 'main' | 'products'): string => {
  return variant === 'main'
    ? `/assets/logo/${image.imageBackground}.jpg`
    : `/assets/${image}.jpg`;
};