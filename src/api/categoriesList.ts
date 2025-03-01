import productsList from "./productsList";
import { Collection, MainCollection, Product } from "../types/ProductsData";

export async function fetchCollectionTypes(): Promise<(Collection | MainCollection)[]> {
  const products = await productsList();

  const uniqueCollectionTypes = new Set<Collection | MainCollection>()

  products.forEach((product) => {
    if (product.collectionType) {
      uniqueCollectionTypes.add(product.collectionType as Collection);
    }
    if (product.collectionMain) {
      uniqueCollectionTypes.add(product.collectionMain as MainCollection);
    }
  });

  return Array.from(uniqueCollectionTypes);
}

export async function UniqueProductCollection(): Promise<{ [key in Collection]: Product }> {
    const products = await productsList();
    const collectionTypes = await fetchCollectionTypes(); 
  
    const selectedProducts: { [key in Collection]: Product } = {} as { [key in Collection]: Product };
  
    collectionTypes.forEach((collectionType) => {
      const product = products.find((product: Product) => product.collectionType === collectionType);
  
      if (product) {
        selectedProducts[collectionType as Collection] = product;
        console.log(selectedProducts)
      }
  
    });
  
    return selectedProducts;
}

const COLLECTION_VALUES: Collection[] = ['Bluzy', 'Spódnice i sukienki', 'Spodnie', 'Akcesoria', 'Komplety'];
const MAIN_COLLECTION_VALUES: MainCollection[] = ['Dziecko', 'Kobieta'];

const isCollection = (type: string): type is Collection => {
  return COLLECTION_VALUES.includes(type as Collection);
};

const isMainCollection = (type: string): type is MainCollection => {
  return MAIN_COLLECTION_VALUES.includes(type as MainCollection);
};

export async function ProductsOfCollection(): Promise<{ [key in Collection | MainCollection]: Product[] }> {
  const products = await productsList();
  const collectionTypes = await fetchCollectionTypes();

  const selectedProducts: Partial<{ [key in Collection | MainCollection]: Product[] }> = {};

  collectionTypes.forEach((collectionType) => {
    if (isCollection(collectionType)) {
      selectedProducts[collectionType] = products.filter((product) => product.collectionType === collectionType);
    } else if (isMainCollection(collectionType)) {
      selectedProducts[collectionType] = products.filter((product) => product.collectionMain === collectionType);
    }
  });

  return selectedProducts as { [key in Collection | MainCollection]: Product[] };
}

export async function ProductsOfMainCollection(): Promise<{ [key in MainCollection]: Product[] }> {
  const products = await productsList();
  const collectionTypes = await fetchCollectionTypes(); 

  const selectedProducts: { [key in MainCollection]: Product[] } = {} as { [key in MainCollection]: Product[] };

  collectionTypes.forEach((collectionMain) => {
    selectedProducts[collectionMain as MainCollection] = products.filter(
      (product: Product) => product.collectionMain === collectionMain
    );
  });
  

  return selectedProducts;
}

export async function ProductsOfBasket(): Promise<{ [key in Collection]: Product[] }> {
  const products = await productsList();
  const collectionTypes = await fetchCollectionTypes(); 

  const selectedProducts: { [key in Collection]: Product[] } = {} as { [key in Collection]: Product[] };

  collectionTypes.forEach((collectionType) => {
    selectedProducts[collectionType as Collection] = products.filter(
      (product: Product) => product.collectionType === collectionType
    );
  });

  return selectedProducts;
}


