import { InputField, TextField, NumberField, SelectField, EmailField, PasswordField } from '../types/InputField';
import { createTextField, createNumberField, createSelectField, createEmailField, createPasswordField } from '../ui/inputs';


const createFields = (field: InputField): HTMLDivElement => {
  switch (field.type) {
    case 'text':
      return createTextField(field as TextField);
    case 'number':
      return createNumberField(field as NumberField);
    case 'select':
      return createSelectField(field as SelectField);
    case 'email':
      return createEmailField(field as EmailField);
    case 'password':
      return createPasswordField(field as PasswordField);
    default:
      throw new Error(`Unsupported field type: ${(field as InputField).type}`);
  }
};

export default {
  createTextField,
  createNumberField,
  createSelectField,
  createFields,
};