import { Link } from "react-router-dom";
import MainMenu from './MainMenu';
import SidebarInfo from './SidebarInfo';
import ThemeToggle from '../theme/ThemeToggle';
import logo from '/logo/logo-light.png';
import logoLight from '/logo/logo1.png';
import useSidebarMenu from "../../hooks/useSidebarMenu";
import useSubMenuToggle from "../../hooks/useSubMenuToggle";
import useSidebarInfo from "../../hooks/useSidebarInfo";
import useStickyMenu from "../../hooks/useStickyMenu";

interface DataType {
    lightMode?: boolean;
}

const HeaderV1 = ({ lightMode }: DataType) => {

    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const toggleSubMenu = useSubMenuToggle();
    const { isInfoOpen, openInfoBar, closeInfoBar } = useSidebarInfo();
    const isMenuSticky = useStickyMenu();

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed on menu-center ${isMenuSticky ? "sticked" : "no-background"} ${isOpen ? "navbar-responsive" : ""}`}>
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>
                            <Link className="navbar-brand" to="/">
                                <img src={lightMode ? logo : logoLight} className="logo logo-display" alt="1MEDIA Logo" />
                                <img src={lightMode ? logo : logoLight} className="logo logo-scrolled" alt="1MEDIA Logo" />
                            </Link>
                        </div>
                        <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`} id="navbar-menu">
                            <img src={logoLight} alt="1MEDIA Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times" />
                            </button>
                            <MainMenu toggleSubMenu={toggleSubMenu} navbarPlacement='navbar-center' />
                        </div>
                        <div className="attr-right">
                            <div className="attr-nav flex">
                                <ul>
                                    <li className="theme-toggle-wrapper">
                                        <ThemeToggle />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <SidebarInfo openInfoBar={openInfoBar} closeInfoBar={closeInfoBar} isInfoOpen={isInfoOpen} />
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu} />
                </nav>
            </header>
        </>
    );
};

export default HeaderV1;