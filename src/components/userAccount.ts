import userAccountFields from '../fields/userAccountFields';
import '../styles/header.scss';

export const UserAccount = (): HTMLElement => {
    const listItemMain = document.createElement("li");
    listItemMain.className = 'userAccount__wrapper';
    listItemMain.textContent = 'Moje konto'

    const userAccountList = document.createElement('ul');
    userAccountList.classList.add('userAccount__list');

    userAccountFields.forEach(optionData => {
        const listItem = document.createElement('li');
        listItem.className = 'userAccount__item';
        listItem.textContent = optionData.text;
        listItem.dataset.value = optionData.value;

        if (optionData.disabled) listItem.classList.add('disabled');
        if (optionData.selected) listItem.classList.add('selected');

        listItem.addEventListener('click', () => {
            if (!optionData.disabled) {
                if (optionData.value === 'wyloguj') {
                    localStorage.removeItem('currentUser');
                    window.location.reload();
                } else {
                    console.log(`Selected: ${optionData.text}`);
                }
            }
        });

        userAccountList.appendChild(listItem);
    });

    listItemMain.addEventListener('click', () => {
      userAccountList.classList.toggle('open');
    });

    listItemMain.appendChild(userAccountList);

    return listItemMain;
};

export default UserAccount;