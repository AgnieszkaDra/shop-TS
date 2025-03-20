const showErrorMessage = (form: HTMLFormElement, fieldName: string, message: string): void => {
  const existingError = form.querySelector(`span[id="${fieldName}-error"]`);
  if (existingError) {
      existingError.remove();
  }

  const label = form.querySelector(`label[for="${fieldName}"]`);
  if (label) {
      const errorMessage = document.createElement("span");
      errorMessage.id = `${fieldName}-error`;
      errorMessage.className = "error-message";
      errorMessage.textContent = message;
      label.parentElement?.appendChild(errorMessage);
  }
};

export default showErrorMessage;