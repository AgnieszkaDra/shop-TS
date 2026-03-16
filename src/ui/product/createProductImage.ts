import { Product } from "../../types/ProductsData";

// const createProductImage = (product: Product) => {
//     const figure = document.createElement("figure");
//     figure.className = "product__figure";
//     figure.style.backgroundImage = `url('/assets/${product.imageBackground}.jpg')`;

//     return figure;
// };

// export default createProductImage;

const createProductImage = (product: Product) => {
  // Wrapper dla obrazu, z proporcjami 4:5
  const wrapper = document.createElement("div");
  wrapper.className = "products__image-wrapper";
  wrapper.style.aspectRatio = "4 / 5"; // można dynamicznie ustawiać

  // Obraz
  const img = document.createElement("img");
  img.src = `/assets/${product.imageBackground}.jpg`;
  img.alt = product.name;
  img.loading = "lazy"; // lepsza wydajność przy wielu produktach
  img.className = "product__image";

  wrapper.appendChild(img);

  return wrapper;
};

export default createProductImage;