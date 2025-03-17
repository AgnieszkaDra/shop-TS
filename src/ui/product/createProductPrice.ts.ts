const createProductPrice = (price: number): HTMLParagraphElement => {
  const p = document.createElement("p");
  p.className = "price__container";

  const span = document.createElement("span");
  span.className = "price";
  span.textContent = `${price.toFixed(2).replace('.', ',')}zł`;

  p.appendChild(span);
  return p;
};

export default createProductPrice;
  