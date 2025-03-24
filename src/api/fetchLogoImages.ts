import { BACK_END_URL } from "../constants/api";
import { CarouselImage } from "../types/Carousellmage";

export async function fetchLogoImages(): Promise<CarouselImage[]> {
    const url = `${BACK_END_URL}/logo/`;
    console.log(url)
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch logo images");
        return await response.json();
    } catch (error) {
        console.error("Error fetching logo images:", error);
        return [];
    }
}

export default fetchLogoImages;