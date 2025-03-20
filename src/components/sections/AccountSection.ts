import { BasketIcon } from "../../ui/elements/BasketIcon";
import LoginUser from "../LoginUser";

export const AccountSection = async (
  type?: "basket" | "login" | "both",
  icon?: "text" | "user"
): Promise<HTMLElement> => {
  const wrapperAccount = document.createElement("div");
  wrapperAccount.className = "account__wrapper";


  if (type === "login" || type === "both") {
    const loginEl = await LoginUser(icon);
    wrapperAccount.appendChild(loginEl);
  }

  if (type === "basket" || type === "both") {
    const basketEl = BasketIcon();
    wrapperAccount.appendChild(basketEl);
  }



  return wrapperAccount;
};