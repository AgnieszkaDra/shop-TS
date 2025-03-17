const ResizeIcon = (): HTMLDivElement => {
    const itemDetails = document.createElement("div");
    itemDetails.className = "product__details";
  
    const resizeIcon = document.createElement("i");
    resizeIcon.classList.add("product__icon", "fa-solid", "fa-up-right-and-down-left-from-center");
    resizeIcon.style.fontSize = "1.5em";
  
    itemDetails.appendChild(resizeIcon);
    return itemDetails;
  };
  
  export default ResizeIcon;