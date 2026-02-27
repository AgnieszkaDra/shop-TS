import { Product } from "../../types/ProductsData";

const createProductImage = (product: Product) => {
    const figure = document.createElement("figure");
    figure.className = "product__figure";
    figure.style.backgroundImage = `url('/assets/${product.imageBackground}.jpg')`;

    return figure;
};

export default createProductImage;