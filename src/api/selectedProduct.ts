import { Product } from "../types/ProductsData";
import { BACK_END_URL } from "../constants/api";
import { navigate } from "../router/router";

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
    console.log(selectedProducts);
    if (selectedProducts.length === 0) return;

    const response = await fetch(SELECTED_PRODUCT_URL, { method: "DELETE" });

    if (!response.ok) {
      throw new Error("Failed to clear selected products");
    }
  } catch (error) {
    console.error("Error clearing selected products:", error);
  }
}

export async function addSelectedProduct(
  selectedProduct: Omit<Product, "id">,
  productLink: HTMLAnchorElement
): Promise<Product | null> {
  try {
    const response = await fetch(SELECTED_PRODUCT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedProduct),
    });

    if (!response.ok) {
      throw new Error("Failed to add selected product");
    }

    const result = await response.json();

    if (!result) {
      return null;
    }

    let path = productLink.getAttribute("href") || productLink.href;
    if (path) {
      navigate(`/product${path}`);
    } else {
      console.warn("No href found on productLink");
    }
    return result;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    alert("Wystąpił problem podczas dodawania do koszyka.");
    return null;
  }
}

export default fetchSelectedProducts;