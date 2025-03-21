import Carousel from "../../ui/carousel/Carousel.ts";
import { fetchSelectedProducts } from "../../api/selectedProduct.ts"; 
import createTitle from "../../typography/createTitle.ts";
import createProductPrice from "../../ui/product/createProductPrice.ts.ts";
import { handleAddToCart } from "./helpers/handleAddToCart.ts";
import { createCarouselImages } from "../../ui/carousel/helpers/createCarouselImages.ts";
import '../../styles/main.scss'

export const SelectedProduct = async (productPath: string): Promise<HTMLElement> => {
    try {
        const selectedProducts = await fetchSelectedProducts();
        const product = selectedProducts.find(p => p.path === productPath);
        
        if (!product) {
            throw new Error('Product not found');
        }

        const container = document.createElement('div');
        container.className = 'selectedProduct__container';
        container.classList.add('container');

        const carouselImages = document.createElement('div');
        carouselImages.className = 'selectedProduct__carousel';

        const images = product.imagesCarousel?.length
      ? createCarouselImages(product.imagesCarousel)
      : [];

        const carousel = await Carousel({ images, variant: 'products' });

        carouselImages.appendChild(carousel);

        const description = document.createElement('div');
        description.className = 'selectedProduct__description';

        const titleContent = `${product.name}`;
        const title = createTitle("h1", titleContent, "selectedProduct__title") 
     
        const price = createProductPrice(product.price)

        const link = document.createElement("a");
        link.href = `/index.html`;
        const h5 = document.createElement('h5');
        h5.className = "products__link";
        h5.textContent = `Strona główna / ${product.name}`;
        link.appendChild(h5);

        const button = document.createElement('button');
        button.className = 'selectedProduct__addButton';
        button.textContent = 'Dodaj do koszyka';

        description.appendChild(link);
        description.appendChild(title);
        description.appendChild(price);
        description.appendChild(button);

        button.addEventListener("click",  () => {
            handleAddToCart(product)
        });

        container.appendChild(carouselImages);
        container.appendChild(description);

        return container;

    } catch (error) {
        console.error("Error fetching the product:", error);
        alert("There was a problem fetching the product details.");
        throw error;
    }
};

export default SelectedProduct;