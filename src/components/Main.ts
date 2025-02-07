import '../styles/header.scss';

// Function to display products dynamically
function displayProducts(products: any[]) {
  const productsContainer = document.getElementById("products-container");

  if (productsContainer) {
    products.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      const imageBackground = `../../public/assets/${product.imageBackground}.jpg`;

      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <img src="${imageBackground}" alt="${product.name}" class="product-image">
        <p>Price: $${product.price}</p>
      `;

      productsContainer.appendChild(productElement);
    });
  } else {
    console.error("Products container not found");
  }
}

export const Main = (): HTMLElement => {
  const main = document.createElement("main");
  main.classList.add("main");

    const productsContainer = document.createElement("div");
  productsContainer.id = "products-container";
  main.appendChild(productsContainer);

    fetch('http://localhost:5050/products') 
    .then(response => response.json())
    .then(data => {
     const products = data.All;
    displayProducts(products);
    })
    .catch(error => {
      console.error("Error fetching products:", error);
    });

  return main;
};

export default Main