import productsList from "./productsList";
import { Product, CategoriesCollection, Collection, MainCollection } from "../types/ProductsData";

export async function fetchCollections(): Promise<{ categories: Collection[], main: MainCollection[] }> {
  const products = await productsList();

  const categories = new Set<Collection>();
  const mainCollections = new Set<MainCollection>();

  products.forEach(product => {
    if (product.collectionType) {
      categories.add(product.collectionType as Collection);
    }
    if (product.collectionMain) {
      mainCollections.add(product.collectionMain as MainCollection);
    }
  });

  return {
    categories: Array.from(categories),
    main: Array.from(mainCollections)
  };
}

// export async function fetchCategories(): Promise<{ [key in Collection]?: Product }> {
//   const products = await productsList();
//   const { categories } = await fetchCollections();

//   const selectedProducts: Partial<{ [key in Collection]: Product }> = {};

//   categories.forEach((categoryType) => {
//     const product = products.find((product: Product) => product.collectionType === categoryType );
//     if (product) {
//       selectedProducts[categoryType] = product;
//     }
//   });

//   return selectedProducts;
// }

import categoriesData from "./categoriesData";
import { Category } from "../types/ProductsData";

export async function fetchCategories(): Promise<Category[]> {
  const data = await categoriesData();

  const categories: Category[] = data.map((category: Category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
    cta: category.cta,
    imageBackground: category.imageBackground,
  }));

  return categories;
}

export async function fetchProductsOfCategory(): Promise<{ [key in Collection | MainCollection]: Product[] }> {
  const products = await productsList();
  const { categories, main } = await fetchCollections(); 

  const selectedProducts: { [key in Collection | MainCollection]: Product[] } = {} as { [key in Collection | MainCollection]: Product[] };

  [...categories, ...main].forEach((category) => {
    selectedProducts[category] = products.filter((product) => 
      product.collectionType === category || product.collectionMain === category
    );
  });

  return selectedProducts;
}

export async function fetchProductsOfBasket(): Promise<{ [key in Collection]: Product[] }> {
  const products = await productsList();

  const selectedProducts: { [key in Collection]: Product[] } = {} as { [key in Collection]: Product[] };

  products.forEach((product) => {
    if (product.collectionType) {
      const category = product.collectionType as CategoriesCollection;
      if (!selectedProducts[category]) {
        selectedProducts[category] = [];
      }
      selectedProducts[category].push(product);
    }

    if (product.collectionMain) {
      const mainCollection = product.collectionMain as Collection;
      if (!selectedProducts[mainCollection]) {
        selectedProducts[mainCollection] = [];
      }
      selectedProducts[mainCollection].push(product);
    }
  });

  return selectedProducts;
}
