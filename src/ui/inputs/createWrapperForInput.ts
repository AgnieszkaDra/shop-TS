import { InputField } from "../../types/InputField";

const createWrapperForInput = (field: InputField): HTMLDivElement => {

  const wrapper = document.createElement('div');
  
  const label = document.createElement('label');
  label.className = 'label';
  if(field.label){
    label.textContent = field.label;
    label.setAttribute('for', field.name);
  }
  wrapper.appendChild(label);

  return wrapper;
};

export default createWrapperForInput;