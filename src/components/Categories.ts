import { Product, CategoriesCollection } from '../types/ProductsData';
import { fetchCategories} from '../api/categoriesList';
import { navigate } from '../router/router';
import '../styles/main.scss';

export const Categories = async (): Promise<HTMLElement> => {

  const categoriesContainer = document.createElement("section");
  categoriesContainer.classList.add("section", "categories");

  const categoriesList = document.createElement("ul");
  categoriesList.classList.add("categories__list");

  const categoriesUnique: { [key in CategoriesCollection]?: Product } = await fetchCategories();

  Object.entries(categoriesUnique).forEach(([collectionType, product]: [string, Product]) => {
 
    const listItem = document.createElement("li");
    listItem.classList.add("categories__item");
    listItem.style.backgroundImage = `url('/assets/${product.imageBackground}.jpg')`;

    const listItemDescription = document.createElement('div')
    listItemDescription.classList.add("categories__description")

    const titleWrapper = document.createElement('div')
    const title = document.createElement("h2");
    title.classList.add("categories__title");
    title.textContent = collectionType.charAt(0).toUpperCase() + collectionType.slice(1);
    titleWrapper.appendChild(title)

    const link = document.createElement("a");
    link.href = `/${collectionType.toLowerCase()}`;

    const linkSpan = document.createElement("span");
    linkSpan.textContent = 'Zobacz produkty';

    link.classList.add("categories__link");
    link.appendChild(linkSpan);

    listItemDescription.appendChild(titleWrapper)
    listItemDescription.appendChild(link)

    const arrowContainer = document.createElement("div");
    arrowContainer.classList.add("categories__arrow");

    const arrowIcon = document.createElement("i");
    arrowIcon.classList.add("fas", "fa-arrow-right");
    arrowContainer.appendChild(arrowIcon);

    link.appendChild(arrowContainer);

    link.addEventListener("click", (event: Event) => {
      event.preventDefault();
      let path = link.getAttribute("href");
        if (path) {
          navigate(`/category${path}`);
        }
      });

    listItem.appendChild(listItemDescription);
    categoriesContainer.appendChild(listItem);

  });

  categoriesContainer.appendChild(categoriesList);

  return categoriesContainer;

};

export default Categories;
