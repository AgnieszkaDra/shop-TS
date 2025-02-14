import { InputField } from "../../types/InputField";

const createWrapperForInput = (field: InputField): HTMLDivElement => {

  const wrapper = document.createElement('div');
  wrapper.className = 'input__wrapper'
  
  const label = document.createElement('label');
  label.className = 'label';
  label.classList.add('input__label')
  if(field.label){
    label.textContent = field.label;
    label.setAttribute('for', field.name);
  }
  wrapper.appendChild(label);

  return wrapper;
};

export default createWrapperForInput;