import {PasswordField } from "../../types/InputField";
import createWrapperForInput from "./createWrapperForInput";

const createPasswordField = (field: PasswordField): HTMLDivElement => {
  const wrapper = createWrapperForInput();

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
// import { NumberField } from '../../types/InputField';

// const createNumberField = (field: NumberField): HTMLInputElement => {
//   const input = document.createElement('input');
//   input.className = 'input';
//   input.type = 'number';
//   if (field.min !== undefined) input.min = field.min.toString();
//   if (field.max !== undefined) input.max = field.max.toString();
//   input.name = field.name;
//   return input;
// };

// export default createNumberField;