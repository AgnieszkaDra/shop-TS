import Header from './helpers/Header';
import { MobileSection } from '../sections/MobileSection';
import { AccountSection } from '../sections/AccountSection';
import { getCSSVariable } from '../../utils/form/getCSSVariable';
import '../../styles/header.scss';

export const HeaderMain = async (): Promise<HTMLElement> => {
    const { navMenu, mobileWrapper } = MobileSection();
    const account = await AccountSection("both");

    const header = Header({
        backgroundColor: getCSSVariable("--color-choco"),
        children: [navMenu, mobileWrapper, account],
        className: 'header-main'
    });

    return header;
};

export default HeaderMain;





