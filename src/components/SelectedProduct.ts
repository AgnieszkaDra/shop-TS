import { BACK_END_URL } from "../constants/api";
import { CarouselImage } from "../types/Carousellmage";
import Carousel from "../ui/carousel/Carousel";
import '../styles/main.scss';

export const SelectedProduct = async (productPath: string): Promise<HTMLElement> => {

    try {
        const response = await fetch(`${BACK_END_URL}/selectedProduct?path=${productPath}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch product details');
        }

        const [product] = await response.json(); 
        
        const container = document.createElement('div');
        container.className = 'selectedProduct__container';
        container.classList.add('container')

        const carouselImages = document.createElement('div')
        carouselImages.className = 'selectedProduct__carousel'

        const images: CarouselImage[] = product.imagesCarousel
        const carousel = await Carousel({ images, variant: 'products' });

        carouselImages.appendChild(carousel)
      
        const description = document.createElement('div');
        description.className = 'selectedProduct__description'

        const title = document.createElement('h1')
        title.className = 'selectedProduct__title'
        title.textContent = `${product.name}`

        const price = document.createElement('p')
        price.className = 'selectedProduct__price'
        price.textContent = `${product.price}`

        const link = document.createElement("a");
        link.href = `/index.html`;
        const h5 = document.createElement('h5')
        h5.className = "products__link"
        h5.textContent = `Strona główna / ${product.name}`
        link.appendChild(h5)

        const button = document.createElement('button')
        button.className = 'selectedProduct__addButton'
        button.textContent = 'Dodaj do koszyka'

        description.appendChild(link)
        description.appendChild(title)
        description.appendChild(price)
        description.appendChild(button)

        button.addEventListener("click", async () => {
            try {
                const cartItem = {
                    productId: product.id, 
                    name: product.name,
                    price: product.price,
                    imageBackground: product.imageBackground,
                    quantity: 1 
                };

                const response = await fetch(`${BACK_END_URL}/cart`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(cartItem),
                });

                if (response.ok) {
                    alert(`${product.name} został dodany do koszyka!`); 
                } else {
                    throw new Error('Wystąpił błąd podczas dodawania do koszyka');
                }
            } catch (error) {
                console.error("Error adding product to cart:", error);
            }
        });

        container.appendChild(carouselImages)
        container.appendChild(description)
        
        return container;

    } catch (error) {
        console.error("Error fetching the product:", error);
        alert("There was a problem fetching the product details.");
        throw error; 
    }
};

export default SelectedProduct;