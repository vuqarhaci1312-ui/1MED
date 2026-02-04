/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

interface DataType {
    navbarPlacement?: string;
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu = ({ navbarPlacement, toggleSubMenu }: DataType) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li>
                    <Link to="/">Ana Səhifə</Link>
                </li>
                <li>
                    <Link to="/about-2">Haqqımızda</Link>
                </li>
                <li>
                    <Link to="/services-2">Xidmətlər</Link>
                </li>
                <li>
                    <Link to="/service-details/1">Strategiyamız</Link>
                </li>
                <li>
                    <Link to="/blog-with-sidebar">Blog</Link>
                </li>
                <li>
                    <Link to="/team-2">Komanda</Link>
                </li>
                <li>
                    <Link to="/project">Proyektlər</Link>
                </li>
                <li className="dropdown">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Əlaqə</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/contact-us">Əlaqə</Link></li>
                        <li><Link to="/faq">Faq</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;