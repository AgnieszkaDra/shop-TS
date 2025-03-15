// import { BACK_END_URL } from "../constants/api";
// import { CarouselImage } from "../types/Carousellmage";

// export async function CarouselOfProductsImages(): Promise<CarouselImage[]> {
//     const url = `${BACK_END_URL}/products/`;
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         const images: CarouselImage[] = data.All.imagesCarousel
//         return images
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         return []; 
//       }
// }

// export default CarouselOfProductsImages;