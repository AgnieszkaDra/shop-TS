import { Product } from "../../types/ProductsData";

const createProductImage = (product: Product) => {
    const itemPhoto = document.createElement("img");
    itemPhoto.className = "product__photo";
    itemPhoto.style.backgroundImage = `url('/assets/${product.imageBackground}.jpg')`;

    const itemPhotoWrapper = document.createElement("figure");
    itemPhotoWrapper.className = "product__figure";
    itemPhotoWrapper.appendChild(itemPhoto);

    return itemPhotoWrapper;
  };

export default createProductImage