import { Product } from "../types/ProductsData";
import { BACK_END_URL } from "../constants/api";

export async function productsList(): Promise<Product[]> {
  const url = `${BACK_END_URL}/products/`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    const products: Product[] = data.All

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; 
  }
}

export default productsList;