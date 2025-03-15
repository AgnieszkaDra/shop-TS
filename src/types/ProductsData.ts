export type Product = {
    id: number;
    name: string;
    path: string,
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

  export type ProductName = 'bluza-ball'

  export type Category = {
    collectionType?: string;  
    name: string;           
    path: string;         
    subCategories?: {      
      categoryName: string;  
      path: string;          
    }[];                    
  };

  export type CategoriesCollection = 'Bluzy' | 'Spódnice i sukienki' |  'Spodnie'  |  'Akcesoria' | 'Komplety'

  export type MainCollection = 'Dziecko' | 'Kobieta' 

  export type Collection = MainCollection | CategoriesCollection