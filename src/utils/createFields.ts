import { InputField, TextField, NumberField, SelectField, EmailField, PasswordField } from '../types/InputField';
import { createTextField, createNumberField, createSelectField, createEmailField, createPasswordField } from '../ui/inputs';


const createFields = (field: InputField): HTMLDivElement => {
  let fieldElement: HTMLDivElement;

  switch (field.type) {
    case "text":
      fieldElement = createTextField(field as TextField);
      break;
    case "number":
      fieldElement = createNumberField(field as NumberField);
      break;
    case "select":
      fieldElement = createSelectField(field as SelectField);
      break;
    case "email":
      fieldElement = createEmailField(field as EmailField);
      break;
    case "password":
      fieldElement = createPasswordField(field as PasswordField);
      break;
    default:
      throw new Error(`Unsupported field type: ${(field as InputField).type}`);
  }

  return fieldElement; 
};



export default {
  createTextField,
  createNumberField,
  createSelectField,
  createFields,
};