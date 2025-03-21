export const Logo = (): HTMLDivElement => {
    const logo = document.createElement("div");
    logo.style.backgroundImage = "url('/assets/logo/logo-dziecko.jpg')";
    logo.style.backgroundSize = "contain";
    logo.style.backgroundRepeat = "no-repeat";
    logo.style.backgroundPosition = "center";
    logo.classList.add("header__logo");

    return logo;
};