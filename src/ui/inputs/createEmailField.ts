import { EmailField } from "../../types/InputField";
import createWrapperForInput from "./createWrapperForInput";

const createEmailField = (field: EmailField): HTMLDivElement => {
  const wrapper = createWrapperForInput(field);

  const input = document.createElement("input");
  input.className = "input";
  input.type = "email"; 
  input.name = field.name;
  input.required = field.required ?? false; 
  if (field.placeholder) input.placeholder = field.placeholder;

  wrapper.insertBefore(input, wrapper.querySelector(".error-message"));

  return wrapper;
};

export default createEmailField;
