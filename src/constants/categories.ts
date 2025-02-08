import { BACK_END_URL } from "./api";
import { Product, Category } from "../types/ProductsData";

export const MenuItems = [
    {
      categoryName: "Strona główna",
      path: "/",
    },
    {
      categoryName: "Strefa dziecka",
      path: "/category/Dziecko",
    },
    {
      categoryName: "Strefa kobiet",
      path: "category/Kobieta",
    },
  ];

export default MenuItems



// export const CATEGORIES = [
//   {
//     collectionType: "Bluzy",
//     path: "clothes",
//     subCategories: [
//       {
//         categoryName: "T-shirts",
//         path: "t-shirts",
//       },
//       {
//         categoryName: "Sweaters",
//         path: "sweaters",
//       },
//       {
//         categoryName: "Coats",
//         path: "coats",
//       },
//       {
//         categoryName: "Pants",
//         path: "pants",
//       },
//     ],
//   }
// ]