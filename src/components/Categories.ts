// import { Product, CategoriesCollection } from '../types/ProductsData';
// import { fetchCategories } from '../api/categoriesList';
// import { navigate } from '../router/router';
// import '../styles/main.scss';
// import createTitle from '../typography/createTitle';

// export const Categories = async (): Promise<HTMLElement> => {
//   const categoriesContainer = document.createElement("section");
//   categoriesContainer.classList.add(
//     "categories",
//     "section-padding"
//   );

//   const categoriesList = document.createElement("ul");
//   categoriesList.classList.add(
//     "categories__list",
//     "multirow-inner",
//     "page-width",
//     "grid",
//     "grid--2-col-tablet"
//   );

//   const categoriesUnique: Partial<Record<CategoriesCollection, Product>> =
//     await fetchCategories();

//   Object.entries(categoriesUnique).forEach(([collectionType, product]) => {
//     if (!product) return;
//     console.log(product)

//     const listItem = document.createElement("li");
//     listItem.classList.add("categories__item", "grid__item");
//     listItem.style.backgroundImage = `url('/assets/${product.imageBackground}.jpg')`;

//     const listItemDescription = document.createElement("div");
//     listItemDescription.classList.add("categories__description");

//     const titleWrapper = document.createElement("div");
//     const titleContent =
//       collectionType.charAt(0).toUpperCase() + collectionType.slice(1);

//     const title = createTitle(
//       "h2",
//       titleContent,
//       "categories__title h1-font"
//     );

//     titleWrapper.appendChild(title);

//     const link = document.createElement("a");
//     link.href = `/${collectionType.toLowerCase()}`;
//     link.classList.add("categories__link");

//     const linkSpan = document.createElement("span");
//     linkSpan.textContent = "Zobacz produkty";

//     const arrowContainer = document.createElement("div");
//     arrowContainer.classList.add("categories__arrow");

//     const arrowIcon = document.createElement("i");
//     arrowIcon.classList.add("fas", "fa-arrow-right");

//     arrowContainer.appendChild(arrowIcon);
//     link.appendChild(linkSpan);
//     link.appendChild(arrowContainer);

//     link.addEventListener("click", (event: Event) => {
//       event.preventDefault();
//       const path = link.getAttribute("href");
//       if (path) {
//         navigate(`/category${path}`);
//       }
//     });

//     listItemDescription.appendChild(titleWrapper);
//     listItemDescription.appendChild(link);
//     listItem.appendChild(listItemDescription);

//     categoriesList.appendChild(listItem);
//   });

//   categoriesContainer.appendChild(categoriesList);

//   return categoriesContainer;
// };

// export default Categories;

//import { navigate } from '../router/router';
import { navigate } from '../router/router';
import '../styles/main.scss';
import createTitle from '../typography/createTitle';
import categoriesData from '../api/categoriesData';

const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

export const Categories = async (): Promise<HTMLElement> => {
  const categoriesContainer = document.createElement('section');
  categoriesContainer.classList.add('categories', 'section-padding');

  try {
    const categories = await categoriesData();

    if (!categories.length) {
      throw new Error('No categories found');
    }

    const categoriesList = document.createElement('ul');
    categoriesList.classList.add(
      'categories__list',
      'multirow-inner',
      'page-width',
      'grid--2-col-tablet'
    );

    const fragment = document.createDocumentFragment();

    categories.forEach((category) => {
      const listItem = document.createElement('li');
      listItem.classList.add('categories__item', 'grid', 'grid--2-col-tablet', 'image-with-text__media--medium');
      
      const imageWrapper = document.createElement('div');
      imageWrapper.classList.add('categories__image-wrapper', 'categories__item', 'grid__item');
      const image = document.createElement('img');
      image.src = `/assets/${category.imageBackground}`;
      image.alt = category.name;
      image.classList.add('categories__image');
      imageWrapper.appendChild(image);
      listItem.appendChild(imageWrapper);

      const descriptionWrapper = document.createElement('div');
      descriptionWrapper.classList.add('categories__description', 'grid__item', 'image-with-text__content');

      const captionTitle = document.createElement('p');
      captionTitle.classList.add('categories__subtitle', 'caption-with-letter-spacing--medium', 'caption-with-letter-spacing');
      captionTitle.textContent = category.caption || '';
      
      const title = createTitle(
        'h2',
        category.name,
        'categories__title h1-font image-with-text__heading'
      );

      const paragraphWrapper = document.createElement('div');
      paragraphWrapper.classList.add('categories__paragraph-wrapper');
      const description = document.createElement('p');
      description.classList.add('categories__text');
      description.textContent = category.description || '';
      paragraphWrapper.appendChild(description);
      descriptionWrapper.appendChild(paragraphWrapper);

      const slug = slugify(category.name);

      const link = document.createElement('a');
      link.href = `/category/${slug}`;
      link.classList.add('categories__link', 'button', 'button--primary');
      link.textContent = category.cta;

      link.addEventListener('click', (event: Event) => {
        event.preventDefault();
        navigate(`/category/${slug}`);
      });

      descriptionWrapper.append(captionTitle, title, paragraphWrapper, link);
      listItem.appendChild(descriptionWrapper);
      fragment.appendChild(listItem);
    });

    categoriesList.appendChild(fragment);
    categoriesContainer.appendChild(categoriesList);

  } catch (error) {
    console.error('Failed to load categories:', error);

    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Nie udało się załadować kategorii.';
    categoriesContainer.appendChild(errorMessage);
  }

  return categoriesContainer;
};

export default Categories;
//   const response = await fetch('http://localhost:3000/categories');

//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }

//   const categories: Category[] = await response.json();

//   categories.forEach((category) => {
//     const listItem = document.createElement('li');
//     listItem.classList.add('categories__item', 'grid__item');
//     listItem.style.backgroundImage = `url('/assets/${category.imageBackground}.jpg')`;

//     const listItemDescription = document.createElement('div');
//     listItemDescription.classList.add('categories__description');

//     // TITLE
//     const title = createTitle(
//       'h2',
//       category.name,
//       'categories__title h1-font'
//     );

//     // SUBTITLE (opcjonalnie jeśli chcesz go wyświetlać)
//     const subtitle = document.createElement('p');
//     subtitle.classList.add('categories__subtitle');
//     subtitle.textContent = category.subtitle;

//     // LINK
//     const link = document.createElement('a');
//     link.href = `/${category.name.toLowerCase()}`;
//     link.classList.add('categories__link');

//     const linkSpan = document.createElement('span');
//     linkSpan.textContent = category.cta;

//     const arrowContainer = document.createElement('div');
//     arrowContainer.classList.add('categories__arrow');

//     const arrowIcon = document.createElement('i');
//     arrowIcon.classList.add('fas', 'fa-arrow-right');

//     arrowContainer.appendChild(arrowIcon);
//     link.appendChild(linkSpan);
//     link.appendChild(arrowContainer);

//     link.addEventListener('click', (event: Event) => {
//       event.preventDefault();
//       navigate(`/category/${category.name.toLowerCase()}`);
//     });

//     listItemDescription.appendChild(title);
//     listItemDescription.appendChild(subtitle);
//     listItemDescription.appendChild(link);
//     listItem.appendChild(listItemDescription);

//     categoriesList.appendChild(listItem);
//   });

//   categoriesContainer.appendChild(categoriesList);

//   return categoriesContainer;
// };

// export default Categories;