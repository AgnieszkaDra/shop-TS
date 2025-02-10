import { ProductsOfCollection } from "../api/categoriesList";
import { Collection, Product } from "../types/ProductsData";

export const Category = async (category: string): Promise<HTMLElement> => {
    const products: { [key in Collection]: Product[] } = await ProductsOfCollection();

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

                listItem.appendChild(caption);
                productsContainer.appendChild(listItem);
            });
        }
    });

    return container;
};
