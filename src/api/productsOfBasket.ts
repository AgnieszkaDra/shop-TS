import { Product } from "../types/ProductsData";
import { BACK_END_URL } from "../constants/api";

export async function productsOfBasket(): Promise<Product[]> {
  const url = `${BACK_END_URL}/cart/`;

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

export default productsOfBasket;