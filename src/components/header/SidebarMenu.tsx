import { Link } from "react-router-dom";
import ThemeToggle from '../theme/ThemeToggle';
import logoLight from "/logo/logo1.png"
import MainMenuV2 from './MainMenuV2';
import SocialShareV3 from '../social/SocialShareV3';
import HeaderNewsLetter from './HeaderNewsLetter';
import useSubMenuToggleV2 from "../../hooks/useSubMenuToggleV2";

interface DataType {
    openMenu?: () => void;
    isInfoOpen?: boolean;
    openInfoBar?: () => void;
    closeInfoBar?: () => void;
}

const SidebarMenu = ({ isInfoOpen, closeInfoBar, openInfoBar }: DataType) => {

    const toggleSubMenu2 = useSubMenuToggleV2();

    return (
        <>
            <div className="attr-right">
                <div className="attr-nav flex">
                    <ul>
                        <li className="theme-toggle-wrapper">
                            <ThemeToggle />
                        </li>
                        <li className="side-menu">
                            <Link to="#" onClick={openInfoBar}>
                                <strong>MENYU </strong>
                                <div className="line">
                                    <span className="bar-1" />
                                    <span className="bar-2" />
                                    <span className="bar-3" />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-2">
                    <div className={`side ${isInfoOpen ? "on" : ""}`}>
                        <Link to="#" className="close-side" onClick={closeInfoBar}>Bağla <i className="fas fa-times" /></Link>
                        <div className="widget">
                            <div className="logo">
                                <Link to="/">
                                    <img src={logoLight} alt="1MEDIA Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7 col-lg-7">
                                    <div className="side-navbar-inner">
                                        <div className="simple-menu">
                                            <MainMenuV2 toggleSubMenu2={toggleSubMenu2} closeInfoBar={closeInfoBar} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
                                    <div className="side-widgets">
                                        <div className="widget address">
                                            <div>
                                                <ul>
                                                    <li>
                                                        <div className="content">
                                                            <p>Ünvan</p>
                                                            <strong>Bakı şəhəri, Nizami rayonu<br />Rəşid Behbudov küçəsi, 123</strong>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="content">
                                                            <p>E-poçt</p>
                                                            <strong>info@1media.az</strong>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="content">
                                                            <p>Telefon</p>
                                                            <strong>+994 50 123 45 67</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="widget newsletter">
                                            <h4 className="title">Abunə Olun!</h4>
                                            <HeaderNewsLetter />
                                        </div>
                                        <div className="widget social">
                                            <ul className="link">
                                                <SocialShareV3 />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarMenu;