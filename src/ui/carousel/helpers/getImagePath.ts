import { CarouselImage } from "../../../types/Carousellmage";

export const getImagePath = (image: CarouselImage, variant: 'main' | 'products'): string => {
  return variant === 'main'
    ? `/assets/logo/${image.imageBackground}.jpg`
    : `/assets/${image}.jpg`;
};