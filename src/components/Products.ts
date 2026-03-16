import HeaderProducts from "./header/HeaderProducts.ts";
import { fetchProductsOfCategory } from "../api/categoriesList";
import { Collection, Product } from "../types/ProductsData";
import { navigate } from "../router/router";
import createProductImage from "../ui/product/createProductImage";
import ResizeIcon from "../ui/elements/ResizeIcon.ts";
import createTitle from "../typography/createTitle";
import createProductPrice from "../ui/product/createProductPrice.ts";

export const Products = async (category: string): Promise<HTMLElement> => {
  const root = document.querySelector("#root");

  const header = await HeaderProducts();
  root?.appendChild(header);

  const products: { [key in Collection]: Product[] } = await fetchProductsOfCategory();

  const container = document.createElement("section");
  container.classList.add("product", "section-padding");

  const title = createTitle("h1", category, "product-list__category-title h1");

  const link = document.createElement("a");
  link.href = `/index.html`;
  const h2 = document.createElement("h2");
  h2.className = "breadcrumb-link facets-heading";
  h2.textContent = `Strona główna / ${category}`;
  link.appendChild(h2);

  const productsContainer = document.createElement("ul");
  productsContainer.classList.add(
    "product-list",
    "grid",
    "grid--2-col-tablet-down",
    "grid--4-col-desktop"
  );

  container.appendChild(title);
  container.appendChild(link);
  container.appendChild(productsContainer);

  Object.entries(products).forEach(([collectionType, productsArray]) => {
    if (collectionType.toLowerCase() === category.toLowerCase()) {
      productsArray.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("grid__item", "product-card");

        const itemPhoto = createProductImage(product);
        const resizeIcon = ResizeIcon();
        productCard.appendChild(itemPhoto);
        productCard.appendChild(resizeIcon);

        const cardInformation = document.createElement("div");
        cardInformation.classList.add("product-card__info");

        const titleElement = createTitle("h3", product.name, "product-card__title");
        cardInformation.appendChild(titleElement);

        const price = createProductPrice(product.price);
        cardInformation.appendChild(price);

        productCard.appendChild(cardInformation);

        const openMore = document.createElement("button");
        openMore.className = "product-card__button";
        openMore.textContent = "Zobacz więcej";
        openMore.dataset.path = `/product/${product.path}`;

        openMore.addEventListener("click", (event) => {
          event.preventDefault();
          const path = openMore.dataset.path;
          if (path) {
            navigate(path);
          } else {
            console.warn("No path found for this button");
          }
        });

        productCard.appendChild(openMore);
        productsContainer.appendChild(productCard);
      });
    }
  });

  return container;
};

export default Products;


