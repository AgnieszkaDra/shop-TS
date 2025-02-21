const createWrapperForInput = (): HTMLDivElement => {

  const wrapper = document.createElement('div');
  wrapper.className = 'input__wrapper'
  
  return wrapper;
  
};

export default createWrapperForInput;