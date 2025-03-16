import { BACK_END_URL } from "../constants/api";
import { CarouselImage } from "../types/Carousellmage";

export async function fetchProductImages(): Promise<CarouselImage[]> {
    try {
        const response = await fetch(`${BACK_END_URL}/all/`);
        if (!response.ok) throw new Error("Failed to fetch all images");
        return await response.json();
    } catch (error) {
        console.error("Error fetching logo images:", error);
        return [];
    }
}

export default fetchProductImages;