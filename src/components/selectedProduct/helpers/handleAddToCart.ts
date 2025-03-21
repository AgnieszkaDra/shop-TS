import addToCart from "../../../api/addToCart";
import { Product } from "../../../types/ProductsData";

export async function handleAddToCart(product: Product): Promise<void> {
  try {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageBackground: product.imageBackground,
      quantity: 1,
    };

    if (await addToCart(cartItem)) {
      alert(`${product.name} został dodany do koszyka!`);
    } else {
      throw new Error("Wystąpił błąd podczas dodawania do koszyka");
    }
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
}