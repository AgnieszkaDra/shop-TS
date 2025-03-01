import Header from "../components/Header";
import Main from "../components/Main";

const HomePage = async (): Promise<HTMLElement> => {
  const container = document.createElement("div");
  container.className = "homepage";

  const header = await Header();
  const main = await Main();

  container.append(header, main);
  return container;
};

export default HomePage;
