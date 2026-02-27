import Header from './helpers/Header';
import { MobileSection } from '../sections/MobileSection';
import { AccountSection } from '../sections/AccountSection';
import { Logo } from '../../ui/elements/Logo';
import { getCSSVariable } from '../../utils/getCSSVariable';
import '../../styles/header.scss';

export const HeaderProducts = async (): Promise<HTMLElement> => {
    const { navMenu, mobileWrapper } = MobileSection();
    const account = await AccountSection("both");
    const logo = Logo();

    const header = Header({
        backgroundColor: getCSSVariable("--color-choco"),
        children: [navMenu, mobileWrapper, logo, account],
        className: 'header__products'
    });

    return header;
};

export default HeaderProducts;








