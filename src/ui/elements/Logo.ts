export const Logo = (): HTMLImageElement => {
    const logo = document.createElement("img");
    logo.src = "/assets/logo/logo-dziecko.jpg"; 
    logo.alt = "logo";
    logo.classList.add("header__logo");

    return logo;};