import HeaderMain from "../components/header/HeaderMain";
import Main from "../components/Main";


export const HomePage = async (): Promise<HTMLElement> => {
    const container = document.createElement("div");
    container.className = "homepage";

    const header = await HeaderMain()
    const main = await Main();

    container.append(header, main);
    return container;
};

export default HomePage;
