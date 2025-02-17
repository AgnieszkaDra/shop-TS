import { InputField } from "../../types/InputField";

const createWrapperForInput = (field: InputField): HTMLDivElement => {

  const wrapper = document.createElement('div');
  wrapper.className = 'input__wrapper'
  
  return wrapper;
  
};

export default createWrapperForInput;