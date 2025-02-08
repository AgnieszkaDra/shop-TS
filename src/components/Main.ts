import '../styles/main.scss';

import { Product, Collection } from '../types/ProductsData';
import { UniqueProductCollection } from '../api/categoriesList';
import { navigate } from '../router/router';



// function displayProducts(products: Product[], productsContainer: HTMLElement) {
 
//   products.forEach(product => {
//     const productElement = document.createElement("div");
//     productElement.classList.add("product");

//     const imageBackground = `http://localhost:5050/public/assets/${product.imageBackground}.jpg`;
    
//     productElement.innerHTML = `
//       <h3>${product.name}</h3>
//       <img src="${imageBackground}" alt="${product.name}" class="product-image">
//       <p>Price: $${product.price}</p>
//     `;

//     productsContainer.appendChild(productElement);
//   });
// }
export const Main = async (): Promise<HTMLElement> => {
  const main = document.createElement("main");
  main.classList.add("main");

  const productsContainer = document.createElement("section");
  productsContainer.classList.add("section", "products");
  productsContainer.id = "products-container";
  const categoriesContainer = document.createElement("ul");
  categoriesContainer.classList.add("categories");

  const categories: { [key in Collection]: Product } = await UniqueProductCollection();

  Object.entries(categories).forEach(([collectionType, product]: [string, Product]) => {
    const listItem = document.createElement("li");
    listItem.classList.add("categories__item");
    listItem.style.backgroundImage = `url('../../public/assets/${product.imageBackground}.jpg')`;

    const title = document.createElement("h2");
    title.classList.add("categories__title");
    title.textContent = collectionType;

    const link = document.createElement("a");
    link.href = `/${collectionType.toLowerCase()}`;
    const linkSpan = document.createElement("span");
    linkSpan.textContent = 'Zobacz produkty';
    link.classList.add("categories__link");
    link.appendChild(linkSpan);
    const arrowIcon = document.createElement("i");
    arrowIcon.classList.add("fas", "fa-arrow-right");
    const arrowContainer = document.createElement("div");
    arrowContainer.classList.add("categories__arrow");
    arrowContainer.appendChild(arrowIcon);
    link.appendChild(arrowContainer);

    link.addEventListener("click", (event: Event) => {
      event.preventDefault();
      const path = link.getAttribute("href");
      console.log(path);
      if (path) {
        navigate(path); // Ensure dynamic path works
      }
    });

    listItem.appendChild(title);
    listItem.appendChild(link);

    categoriesContainer.appendChild(listItem);
  });

  productsContainer.appendChild(categoriesContainer);
  main.appendChild(productsContainer);

  return main;
};

export default Main;
