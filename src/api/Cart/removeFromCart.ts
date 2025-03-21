import { BACK_END_URL } from "../../constants/api";

const CART_URL = `${BACK_END_URL}/cart`;

export async function removeFromCart(productId: string): Promise<boolean> {
  try {
    const response = await fetch(`${CART_URL}/${productId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Failed to remove product from cart");
    }

    return true;
  } catch (error) {
    console.error("Error removing product from cart:", error);
    return false;
  }
}

export default removeFromCart;