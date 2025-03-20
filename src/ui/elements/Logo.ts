export const Logo = (): HTMLImageElement => {
    const logo = document.createElement("img");
    logo.src = "../../public/assets/logo/logo-dziecko.jpg"; 
    logo.alt = "logo";
    logo.classList.add("header__mobile--products__logo");

    return logo;};