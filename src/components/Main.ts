import '../styles/header.scss';
import productsListLoader from '../api/productsList';
import { Product } from '../types/ProductsData';

function displayProducts(products: Product[], productsContainer: HTMLElement) {
 
  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const imageBackground = `../../public/assets/${product.imageBackground}.jpg`;

    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <img src="${imageBackground}" alt="${product.name}" class="product-image">
      <p>Price: $${product.price}</p>
    `;

    productsContainer.appendChild(productElement);
  });
}
export const Main = async (): Promise<HTMLElement> => {
  const main = document.createElement("main");
  main.classList.add("main");


  const productsContainer = document.createElement("div");
  productsContainer.id = "products-container";
  main.appendChild(productsContainer);

  const products = await productsListLoader();

  displayProducts(products, productsContainer);

  return main;
};

export default Main;