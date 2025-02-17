import { PasswordField } from "../../types/InputField";
import createWrapperForInput from "./createWrapperForInput";

const createPasswordField = (field: PasswordField): HTMLDivElement => {
  const wrapper = createWrapperForInput(field);

  const input = document.createElement("input");
  input.className = "input";
  input.type = "password"; 
  input.name = field.name;
  input.required = field.required ?? false; 
  if (field.placeholder) input.placeholder = field.placeholder;

  wrapper.insertBefore(input, wrapper.querySelector(".error-message"));

  return wrapper;
};

export default createPasswordField;
