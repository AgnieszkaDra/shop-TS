import userAccountFields from '../fields/userAccountFields';
import '../styles/header.scss';

export const UserAccount = (): HTMLElement  => {
    const wrapper = document.createElement("div");
    wrapper.className = 'userAccount__wrapper';
  
    const userAccountSelect = document.createElement('select');
    userAccountSelect.classList.add('userAccount__select');

    userAccountFields.forEach(optionData => {
      const option = document.createElement('option') as HTMLOptionElement;
      option.className = 'userAccount__option';
      option.value = optionData.value;
      option.textContent = optionData.text;
          
      if (optionData.disabled) option.disabled = true;
      if (optionData.selected) option.selected = true;
          
      userAccountSelect.appendChild(option);
    });

    const handleLogout = () => {
      localStorage.removeItem('currentUser');
      window.location.reload(); 
    };
          
    userAccountSelect.addEventListener('change', () => {
      const selectedOption = userAccountSelect.value;
          
      if (selectedOption === 'wyloguj') {
        handleLogout();
      }
      
    });

    wrapper.addEventListener('click', () => {
      wrapper.classList.toggle('open');
    });

    wrapper.appendChild(userAccountSelect)
   
    return wrapper;
};

export default UserAccount;