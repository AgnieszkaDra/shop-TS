import { InputField } from '../../types/InputField';
import showErrorMessage from './showErrorMessage';
import showSuccessMessage from './showSuccessMessage';

export const validateForm = async (
  fields: InputField[], 
  formData: Record<string, string | number>, 
  formElement: HTMLFormElement
): Promise<string[]> => {
  const errors: string[] = [];


  for (const field of fields) {
    const value = formData[field.name];

    const previousErrors = formElement.querySelectorAll(`.error-message[id="${field.name}-error"]`);
    previousErrors.forEach((error) => error.remove());

    const existingMessage = formElement.querySelector(".success-message");
    if (existingMessage) {
      existingMessage.remove();
    }

 
    if (field.required && (value === undefined || value === '')) {
      errors.push(`${field.label} is required.`);
      showErrorMessage(formElement, field.name, `${field.label} is required.`);
    }


    if (field.type === 'number') {
      const numValue = Number(value);
      
      if (field.min !== undefined && numValue < field.min) {
          errors.push(`${field.label} must be at least ${field.min}.`);
          showErrorMessage(formElement, field.name, `${field.label} must be at least ${field.min}.`);
      }
  
      if (field.max !== undefined && numValue > field.max) {
          errors.push(`${field.label} must be less than ${field.max}.`);
          showErrorMessage(formElement, field.name, `${field.label} must be less than ${field.max}.`);
      }
  }

    if (field.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
          errors.push(`${field.label} is required.`);
          showErrorMessage(formElement, field.name, `${field.label} is required.`);
      } else if (!emailRegex.test(String(value))) {
          errors.push(`Please enter a valid email address.`);
          showErrorMessage(formElement, field.name, `Please enter a valid email address.`);
      }
  }

  if (field.type === 'password') {
    const password = String(value);

    if (!password) {
        errors.push(`${field.label} is required.`);
        showErrorMessage(formElement, field.name, `${field.label} is required.`);
    }else {
        
    }
}
  }

  if (errors.length > 0) {
    console.error("Form validation errors:", errors);
  } else {
    showSuccessMessage(formElement); 
  }

  return errors;
};

export default validateForm;