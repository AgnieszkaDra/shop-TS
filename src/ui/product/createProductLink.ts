import { Product } from "../../types/ProductsData";

const createProductLink = (product: Product) => {
    const linkItem = document.createElement("a");
    linkItem.href = `/${product?.path}`;
    return linkItem;
  };

export default createProductLink;
  