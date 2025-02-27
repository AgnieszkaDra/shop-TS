import { navigate } from "../router/router";
import loggedUser from "../api/loggedUser";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/header.scss";

export const LoginIcon = async (): Promise<HTMLElement> => {
  const userLog = localStorage.getItem("currentUser");
  let userData = userLog ? JSON.parse(userLog) : null;

  if (userData) {
    try {
      userData = await loggedUser(userData);
    } catch (error) {
      console.error("Error fetching logged user:", error);
    }
  }

  const wrapper = document.createElement("div");
  wrapper.className = "loginIcon__wrapper";

  const loginLink = document.createElement("a");
  loginLink.classList.add("loginIcon__link");
  loginLink.setAttribute("id", "loginIcon");
  loginLink.href = "/moje konto";
  loginLink.textContent = userData ? "Moje konto" : "Logowanie";

  wrapper.appendChild(loginLink);

  loginLink.addEventListener("click", (event) => {
    event.preventDefault();
    const path = loginLink.getAttribute("href");
    if (path) navigate(path);
  });

  return wrapper;
};

export default LoginIcon;