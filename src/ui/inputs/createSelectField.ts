import { SelectField } from '../../types/InputField';
import createWrapperForInput from './createWrapperForInput';

const createSelectField = (field: SelectField): HTMLDivElement => {
  const wrapper = createWrapperForInput();

  const select = document.createElement('select');
  select.className = 'select';
  select.name = field.name;

  field.options.forEach((option) => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value.toString();
    optionElement.textContent = option.label;
    select.appendChild(optionElement);
  });

  wrapper.insertBefore(select, wrapper.querySelector('.error-message'));

  return wrapper;
};

export default createSelectField;


