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

  export type Category = {
    collectionType?: string;  // Type of the collection (e.g., Bluzy, T-shirts)
    name: string;            // Name of the category
    path: string;            // Path or URL for the category
    subCategories?: {       // Optional sub-categories, if any
      categoryName: string;  // Name of the sub-category
      path: string;          // Path or URL for the sub-category
    }[];                    
  };

  export type Collection = 'Bluzy' | 'Spódnice i sukienki' |  'Spodnie' | 'Komplety' |  'Akcesoria'

  export type MainCollection = 'Dziecko' | 'Kobieta' 