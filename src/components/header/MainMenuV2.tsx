/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

interface DataType {
    toggleSubMenu2?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    closeInfoBar?: () => void;
}

const MainMenuV2 = ({ toggleSubMenu2, closeInfoBar }: DataType) => {
    return (
        <>
            <ul className="simple-menu-list">
                <li><Link to="/" onClick={closeInfoBar}>Ana Səhifə</Link></li>
                <li><Link to="/blog-with-sidebar" onClick={closeInfoBar}>Blog</Link></li>
                <li><Link to="/services-2" onClick={closeInfoBar}>Xidmətlər</Link></li>
                <li><Link to="/service-details/1" onClick={closeInfoBar}>Strategiyamız</Link></li>
                <li><Link to="/about-2" onClick={closeInfoBar}>Haqqımızda</Link></li>
                <li><Link to="/team-2" onClick={closeInfoBar}>Komanda</Link></li>
                <li><Link to="/project" onClick={closeInfoBar}>Proyektlər</Link></li>
                <li>
                    <Link to="#">Əlaqə </Link>
                    <i className="fas fa-plus" onClick={toggleSubMenu2} />
                    <ul className="sub-menu">
                        <li><Link to="/contact-us" onClick={closeInfoBar}>Əlaqə</Link></li>
                        <li><Link to="/faq" onClick={closeInfoBar}>Faq</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default MainMenuV2;