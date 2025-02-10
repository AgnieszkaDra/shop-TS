import { ProductsOfMainCollection } from "../api/categoriesList";
import { MainCollection, Product } from "../types/ProductsData";
import { BACK_END_URL } from "../constants/api";

export const Products = async (category: string): Promise<HTMLElement> => {
    const products: { [key in MainCollection]: Product[] } = await ProductsOfMainCollection();

    const container = document.createElement("div");
    container.classList.add("products-container");
    const h1 = document.createElement("h1")
    h1.textContent = category
    h1.style.textAlign = "center"

    const link = document.createElement("a");
    link.href = `/`;
    const h5 = document.createElement('h5')
    h5.textContent = `Strona główna / ${category}`
    link.appendChild(h5)

    const productsContainer = document.createElement('ul')
    productsContainer.classList.add('products__list')

    container.appendChild(h1)
    container.appendChild(link)
    container.appendChild(productsContainer)

    Object.entries(products).forEach(([collectionType, productsArray]) => {
        if (collectionType.toLowerCase() === category.toLowerCase()) {
            productsArray.forEach(product => {
           
                const listItem = document.createElement("li");
                listItem.classList.add("products__item");
                listItem.style.backgroundImage = `url('/assets/${product.imageBackground}.jpg')`;

                const caption = document.createElement('div')
                caption.style.paddingTop = '1rem'
                const title = document.createElement("h3");
                title.classList.add("products__title");
                title.textContent = product.name;

                const price = document.createElement('span');
                price.textContent = `${product.price}zł`;
                caption.appendChild(title);
                caption.appendChild(price)

                const button = document.createElement('button')
                button.classList.add('products__addButton')
                button.textContent = 'Dodaj do koszyka'

                button.addEventListener("click", async () => {
                    try {
                        const cartItem = {
                            productId: product.id, 
                            name: product.name,
                            price: product.price,
                            imageBackground: product.imageBackground,
                            quantity: 1 
                        };

                        const response = await fetch(`${BACK_END_URL}/cart`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(cartItem),
                        });

                        if (response.ok) {
                            alert(`${product.name} został dodany do koszyka!`); 
                        } else {
                            throw new Error('Wystąpił błąd podczas dodawania do koszyka');
                        }
                    } catch (error) {
                        console.error("Error adding product to cart:", error);
                        alert("Wystąpił problem podczas dodawania do koszyka.");
                    }
                });

                listItem.appendChild(caption);
                listItem.appendChild(button)
                productsContainer.appendChild(listItem);
            });
        }
    });

    return container;
};
