import { ProductsOfCollection } from "../api/categoriesList";
import { Collection, Product } from "../types/ProductsData";
import { BACK_END_URL } from "../constants/api";
import { navigateProduct } from "../router/router";

export const Products = async (category: string): Promise<HTMLElement> => {
    const products: { [key in Collection]: Product[] } = await ProductsOfCollection();

    const container = document.createElement("section");
    container.classList.add("section", "products");
    const h1 = document.createElement("h1")
    h1.textContent = category
    h1.style.textAlign = "center"

    const link = document.createElement("a");
    link.href = `/index.html`;
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
                const linkItem = document.createElement("a");
                linkItem.href = `/${product?.path}`;
                const listItem = document.createElement("li");
                listItem.className = 'product'
                listItem.classList.add("products__item");
                
                const itemPhoto = document.createElement('img')
                itemPhoto.className = 'product__photo'
                itemPhoto.style.backgroundImage = `url('/assets/${product.imageBackground}.jpg')`;
                const itemPhotoWrapper = document.createElement('figure')
                itemPhotoWrapper.className = 'product__figure'
                
                itemPhotoWrapper.appendChild(itemPhoto)
                const itemDetails = document.createElement('div')
                itemDetails.className = 'product__details'
                const resizeIcon = document.createElement('i');
                resizeIcon.classList.add('product__icon', 'fa-solid', 'fa-up-right-and-down-left-from-center');
                resizeIcon.style.fontSize = '1.5em';
                itemDetails.appendChild(resizeIcon);

                listItem.appendChild(itemPhotoWrapper)
                listItem.appendChild(itemDetails)

                const caption = document.createElement('div')
                caption.style.paddingTop = '1rem'
                const title = document.createElement("h3");
                title.className = 'product__title'
                title.classList.add("products__title");
                title.textContent = product.name;

                const price = document.createElement('span');
                price.textContent = `${product.price}zł`;
                price.className = 'product__price'
                caption.appendChild(title);
                caption.appendChild(price)

                listItem.appendChild(caption);
              
                linkItem.addEventListener("click", async (event) => {
                 event.preventDefault();
    
                try {
                    const reponseSelectedProducts = await fetch(`${BACK_END_URL}/selectedProduct`);
                    const selectedProducts = await reponseSelectedProducts.json();
            
                    if (selectedProducts.length > 0) {
                        for (const product of selectedProducts) {
                            await fetch(`${BACK_END_URL}/selectedProduct/${product.id}`, {
                                method: "DELETE",
                            });
                        }
                    }
                    const selectedProductItem = {
                        productId: product.id,
                        name: product.name,
                        path: product.path,
                        price: product.price,
                        imageBackground: product.imageBackground,
                    };

                    const response = await fetch(`${BACK_END_URL}/selectedProduct`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(selectedProductItem),
                    });

                    if (response.ok) {
                       
                        let path = linkItem.getAttribute("href") || linkItem.href;
                      
                        if (path) {
                            navigateProduct(path);
                        } else {
                            console.warn("No href found on linkItem");
                        }
                    } else {
                        throw new Error("Wystąpił błąd podczas dodawania do koszyka");
                    }
                } catch (error) {
                    console.error("Error adding product to cart:", error);
                    alert("Wystąpił problem podczas dodawania do koszyka.");
                }
                });

                linkItem.appendChild(listItem)
                productsContainer.appendChild(linkItem);

            });
        }
    });

    return container;
};
