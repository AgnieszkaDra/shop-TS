import { TextField } from '../../types/InputField';
import createWrapperForInput from './createWrapperForInput';

const createTextField = (field: TextField): HTMLDivElement => {
  const wrapper = createWrapperForInput();

  const input = document.createElement('input');
  input.className = 'input';
  input.type = 'text';
  input.placeholder = field.placeholder ?? '';
  input.name = field.name;

  wrapper.insertBefore(input, wrapper.querySelector('.error-message'));

  return wrapper;
};

export default createTextField;
