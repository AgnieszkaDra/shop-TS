import { Product } from "../types/ProductsData";
import { BACK_END_URL } from "../constants/api";

export async function selectedProduct(): Promise<Product[]> {
  const url = `${BACK_END_URL}/selectedProduct/`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const products: Product[] = data; 

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; 
  }
}

export default selectedProduct;