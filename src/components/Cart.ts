import productsOfBasket from "../api/productsOfBasket";
import removeFromCart from "../api/Cart/removeFromCart";

export const Cart = async (): Promise<HTMLElement> => {
    
    const productsOrder = await productsOfBasket(); 
    const container = document.createElement("div");
    container.classList.add("products-container");
    
    const h1 = document.createElement("h1");
    h1.textContent = "Koszyk";  
    h1.style.textAlign = "center";
    
    const productsContainer = document.createElement('ul');
    productsContainer.classList.add('products__list');

    Object.entries(productsOrder).forEach(([, product]) => {
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
            
            const success = await removeFromCart(`${product.id}`);
            if (success) {
                alert(`${product.name} został usunięty z koszyka!`);
                listItem.remove();
            } else {
                alert("Wystąpił błąd podczas usuwania z koszyka.");
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