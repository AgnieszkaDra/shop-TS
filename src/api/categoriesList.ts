import productsList from "./productsList";
import { Product, CategoriesCollection, Collection } from "../types/ProductsData";

export async function fetchCollections(): Promise<{ categories: CategoriesCollection[] }> {
  const products = await productsList();

  const categories = new Set(
    products
      .map(product => product.collectionType)
      .filter((type): type is CategoriesCollection => type !== undefined)
  );

  return { categories: Array.from(categories) };
}

export async function fetchCategories(): Promise<{ [key in CategoriesCollection]?: Product }> {
  const products = await productsList();
  const { categories } = await fetchCollections();

  const selectedProducts: Partial<{ [key in CategoriesCollection]: Product }> = {};

  categories.forEach((categoryType) => {
    const product = products.find((product: Product) => product.collectionType === categoryType);
    if (product) {
      selectedProducts[categoryType] = product;
    }
  });

  return selectedProducts;
}

export async function fetchProductsOfCategory(): Promise<{ [key in CategoriesCollection]: Product[] }> {
  const products = await productsList();
  const { categories } = await fetchCollections(); 

  const selectedProducts: { [key in CategoriesCollection]: Product[] } = {} as { [key in CategoriesCollection]: Product[] };

  categories.forEach((category) => {
    selectedProducts[category] = products.filter((product) => product.collectionType === category);
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
