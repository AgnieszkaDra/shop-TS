export type Product = {
    id: number;
    name: string;
    imageBackground: string;
    imagesCarousel: string[];
    price: number;
    collectionMain: string;
    collectionType: string;
    features: string[];
  };
  

 export type ProductsData = {
    All: Product[];
  };