import '../styles/header.scss'

export const BurgerClose = (): HTMLElement => {
    const button = document.createElement("button");
    button.id = "close-icon";
    button.classList.add("close-icon");
    button.setAttribute("aria-label", "Close");
    
    for (let i = 0; i < 2; i++) {
        const span = document.createElement("span");
        button.appendChild(span);
    }

    return button;
};

export default BurgerClose;