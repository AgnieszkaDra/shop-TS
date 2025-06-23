import HeaderProducts from "./header/HeaderProducts.ts";
import { fetchProductsOfCategory } from "../api/categoriesList";
import { Collection, Product } from "../types/ProductsData";
import { navigate } from "../router/router";
import createProductLink from "../ui/product/createProductLink";
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
  container.classList.add("section", "products");

  const title = createTitle("h1", category, "products__title");

  const link = document.createElement("a");
  link.href = `/index.html`;
  const h5 = document.createElement("h5");
  h5.className = "products__link";
  h5.textContent = `Strona główna / ${category}`;
  link.appendChild(h5);

  const productsContainer = document.createElement("ul");
  productsContainer.classList.add("products__list");

  container.appendChild(title);
  container.appendChild(link);
  container.appendChild(productsContainer);

  Object.entries(products).forEach(([collectionType, productsArray]) => {
    if (collectionType.toLowerCase() === category.toLowerCase()) {
      productsArray.forEach((product) => {
        const productLink = createProductLink(product);

        const listItem = document.createElement("li");
        listItem.className = "product products__item";

        const itemPhoto = createProductImage(product);
        const resizeIcon = ResizeIcon();

        listItem.appendChild(itemPhoto);
        listItem.appendChild(resizeIcon);

        const caption = document.createElement("div");
        caption.style.paddingTop = "1rem";

        const titleContent = product.name;
        const title = createTitle("h3", titleContent, "products__title");

        const price = createProductPrice(product.price);

        caption.appendChild(title);
        caption.appendChild(price);
        listItem.appendChild(caption);

        productLink.appendChild(listItem);
        productsContainer.appendChild(productLink);

        productLink.addEventListener("click", (event) => {
          event.preventDefault();

          const path = productLink.getAttribute("href") || productLink.href;
          if (path) {
            navigate(`/product${path}`);
          } else {
            console.warn("No href found on productLink");
          }
        });
      });
    }
  });

  return container;
};

export default Products;



