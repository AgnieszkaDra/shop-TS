import productsList from "./productsList";
import { Collection, MainCollection, Product } from "../types/ProductsData";

export async function fetchCollectionTypes(): Promise<string[]> {

    const products = await productsList()

    const uniqueCollectionTypes = (products as Product[]).reduce<string[]>((acc, product) => {
        if (!acc.includes(product.collectionType)) {
          acc.push(product.collectionType);
        }
        return acc;
      }, []);
      console.log(uniqueCollectionTypes);

    return uniqueCollectionTypes;
  } 

export async function UniqueProductCollection(): Promise<{ [key in Collection]: Product }> {
    const products = await productsList();
    const collectionTypes = await fetchCollectionTypes(); 
  
    const selectedProducts: { [key in Collection]: Product } = {} as { [key in Collection]: Product };
  
    collectionTypes.forEach((collectionType) => {
      const product = products.find((product: Product) => product.collectionType === collectionType);
  
      if (product) {
        selectedProducts[collectionType as Collection] = product;
      }
  
    });
  
    return selectedProducts;
}

export async function ProductsOfCollection(): Promise<{ [key in Collection]: Product[] }> {
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


