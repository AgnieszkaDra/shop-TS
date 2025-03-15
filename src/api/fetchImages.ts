// import { BACK_END_URL } from "../constants/api";
// import { CarouselImage } from "../types/Carousellmage";

// export async function fetchLogoImages(): Promise<CarouselImage[]> {
//     return fetchImages(`${BACK_END_URL}/logo/`);
// }

// export async function fetchProductImages(): Promise<CarouselImage[]> {
//     return fetchImages(`${BACK_END_URL}/products/All/imagesCarousel`, true);
// }

// async function fetchImages(url: string, isProduct: boolean = false): Promise<CarouselImage[]> {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         const images: CarouselImage[] = isProduct ? data.All.imagesCarousel : data;
//         console.log(images);
//         return images;
//     } catch (error) {
//         console.error("Error fetching images:", error);
//         return [];
//     }
// }

// export default { fetchLogoImages, fetchProductImages };
