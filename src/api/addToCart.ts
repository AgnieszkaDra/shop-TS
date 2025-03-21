import { BACK_END_URL } from "../constants/api";
import { CartItem } from "../types/ProductsData";

const CART_URL = `${BACK_END_URL}/cart`;

export async function addToCart(cartItem: CartItem): Promise<boolean> {
  try {
    const response = await fetch(CART_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItem),
    });

    if (!response.ok) {
      throw new Error("Failed to add product to cart");
    }

    return true; 
  } catch (error) {
    console.error("Error adding product to cart:", error);
    return false;
  }
}

export default addToCart;