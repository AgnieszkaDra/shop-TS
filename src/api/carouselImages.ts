import { BACK_END_URL } from "../constants/api";
import { CarouselImage } from "../types/Carouselmage";

export async function CarouselImages(): Promise<CarouselImage[]> {
    const url = `${BACK_END_URL}/carousel/`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const images: CarouselImage[] = data
        console.log(images)
        return images
      } catch (error) {
        console.error("Error fetching products:", error);
        return []; 
      }
}

export default CarouselImages;