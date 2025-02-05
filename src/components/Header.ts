import '../styles/header.scss'
import MainPage from '../ui/Navigation';

export const Header = (): HTMLElement =>  {
    const header = document.createElement("header");
    header.classList.add("header");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to My App";

    header.appendChild(heading);
    header.appendChild(MainPage())

    return header;
}

export default Header
  