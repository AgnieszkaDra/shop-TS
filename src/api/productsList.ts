import { BACK_END_URL } from "../constants/api";

export async function productsList() {
  const url = `${BACK_END_URL}/products/`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const products = data.All; 
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default productsList;