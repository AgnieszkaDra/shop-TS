import { NumberField } from "../../types/InputField";
import createWrapperForInput from "./createWrapperForInput";

const createNumberField = (field: NumberField): HTMLDivElement => {
  const wrapper = createWrapperForInput();

  const input = document.createElement('input');
  input.className = 'input';
  input.type = 'number';
  input.placeholder = field.placeholder ?? '';
  if (field.min !== undefined) input.min = field.min.toString();
  if (field.max !== undefined) input.max = field.max.toString();
  input.name = field.name;

  wrapper.insertBefore(input, wrapper.querySelector('.error-message'));

  return wrapper;
};

export default createNumberField;

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