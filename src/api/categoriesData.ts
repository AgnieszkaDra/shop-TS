import { Category } from "../types/ProductsData";
import { BACK_END_URL } from "../constants/api";

export async function categoriesData(): Promise<Category[]> {
  const url = `${BACK_END_URL}/categories/`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const products: Category[] = data
    
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; 
  }
}

export default categoriesData;