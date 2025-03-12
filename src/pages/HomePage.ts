import HeaderMain from "../components/HeaderMain";
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
