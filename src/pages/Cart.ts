import { BACK_END_URL } from "../constants/api";
import productsOfBasket from "../api/productsOfBasket";

export const Cart = async (): Promise<HTMLElement> => {
    
    const productsOrder = await productsOfBasket(); 
    const container = document.createElement("div");
    container.classList.add("products-container");
    
    const h1 = document.createElement("h1");
    h1.textContent = "Koszyk";  
    h1.style.textAlign = "center";
    
    const productsContainer = document.createElement('ul');
    productsContainer.classList.add('products__list');

    Object.entries(productsOrder).forEach(([productId, product]) => {
        const listItem = document.createElement("li");
        listItem.classList.add("products__item");
        listItem.style.backgroundImage = `url('/assets/${product.imageBackground}.jpg')`;

        const caption = document.createElement('div');
        caption.style.paddingTop = '1rem';

        const title = document.createElement("h3");
        title.classList.add("products__title");
        title.textContent = product.name;

        const price = document.createElement('span');
        price.textContent = `${product.price}zł`;
        caption.appendChild(title);
        caption.appendChild(price);

        const button = document.createElement('button');
        button.classList.add('products__addButton');
        button.textContent = 'Dodaj do koszyka';

        button.addEventListener("click", async () => {
            try {
               
                const response = await fetch(`${BACK_END_URL}/cart/${product.id}`, {
                    method: 'DELETE', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    alert(`${product.name} został usunięty z koszyka!`);
                    listItem.remove(); 
                } else {
                    throw new Error('Wystąpił błąd podczas usuwania z koszyka');
                }
            } catch (error) {
                console.error("Error removing product from cart:", error);
                alert("Wystąpił problem podczas usuwania z koszyka.");
            }
        });

        listItem.appendChild(caption);
        listItem.appendChild(button);
        productsContainer.appendChild(listItem);
    });

    container.appendChild(h1);
    container.appendChild(productsContainer);

    return container;
};

export default Cart;