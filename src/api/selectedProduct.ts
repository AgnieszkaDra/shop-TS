import { Product } from "../types/ProductsData";
import { BACK_END_URL } from "../constants/api";

const SELECTED_PRODUCT_URL = `${BACK_END_URL}/selectedProduct/`;

export async function fetchSelectedProducts(): Promise<Product[]> {
  try {
    const response = await fetch(SELECTED_PRODUCT_URL);
    if (!response.ok) throw new Error("Failed to fetch selected products");
    return await response.json();
  } catch (error) {
    console.error("Error fetching selected products:", error);
    return [];
  }
}

export async function clearSelectedProducts(): Promise<void> {
  try {
    const selectedProducts = await fetchSelectedProducts();
    console.log(selectedProducts)
    if (selectedProducts.length === 0) return;

    // await Promise.all(
    //   selectedProducts.map((product) =>
    //     fetch(`${SELECTED_PRODUCT_URL}${product.id}`, { method: "DELETE" })
    //   )
    // );

    const response = await fetch(SELECTED_PRODUCT_URL, { method: "DELETE" });

    if (!response.ok) {
      throw new Error("Failed to clear selected products");
    }
  } catch (error) {
    console.error("Error clearing selected products:", error);
  }
}

export async function addSelectedProduct(selectedProduct: Omit<Product, "id">): Promise<Product | null> {
  try {
    const response = await fetch(SELECTED_PRODUCT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedProduct),
    });

    if (!response.ok) {
      throw new Error("Failed to add selected product");
    }

    return await response.json(); 
  } catch (error) {
    console.error("Error adding selected product:", error);
    return null;
  }
}

export default fetchSelectedProducts;