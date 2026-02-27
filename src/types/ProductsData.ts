export type Product = {
    id: number; // czy to jest tutaj potrzebne skoro id tworzy json-server
    name: string;
    imageBackground: string;
    imagesCarousel: string[];
    price: number;
    collectionMain: string;
    collectionType: string;
    features: string[];
  };

export type CartItem = {
    id: number,
    name: string,
    price: number,
    imageBackground: string,
    quantity: number,
  };


  

 export type ProductsData = {
    All: Product[];
  };

  export type ProductName = 'bluza-ball'

  export type Category = {
    id?: number;
    collectionType?: string;  
    name: string;
    caption?: string;
    description?: string;
    cta: string;
    imageBackground: string;          
    subCategories?: {      
      categoryName: string;  
      path: string;          
    }[];                    
  };

  export type CategoriesCollection = 'Bluzy' | 'Spódnice i sukienki' |  'Spodnie'  |  'Akcesoria' | 'Komplety'

  export type MainCollection = 'Dziecko' | 'Kobieta' 

  export type Collection = MainCollection | CategoriesCollection