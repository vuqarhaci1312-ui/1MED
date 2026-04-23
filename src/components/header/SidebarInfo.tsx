import SocialShareV3 from '../social/SocialShareV3';
import { Link } from "react-router-dom";
import { SITE_ADDRESS_LINE_1, SITE_ADDRESS_LINE_2 } from "../../constants/siteAddress";
import HeaderNewsLetter from './HeaderNewsLetter';
import logoLight from '/logo/logo1.png';

interface SidebarInfoProps {
    openInfoBar?: () => void;
    isInfoOpen?: boolean;
    closeInfoBar?: () => void;
}

const SidebarInfo = ({ openInfoBar, isInfoOpen, closeInfoBar }: SidebarInfoProps) => {
    return (
        <>
            <div className="attr-right">
                <div className="attr-nav flex">
                    <ul>
                        <li className="side-menu">
                            <Link to="#" onClick={openInfoBar}>
                                <span className="bar-1" />
                                <span className="bar-2" />
                                <span className="bar-3" />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={`side ${isInfoOpen ? "on" : ""}`}>
                    <Link to="#" className="close-side" onClick={closeInfoBar}><i className="fa fa-times"></i></Link>
                    <div className="top">
                        <div className="widget">
                            <div className="logo">
                                <img src={logoLight} alt="1MEDIA Logo" />
                            </div>
                        </div>
                        <div className="widget address">
                            <div>
                                <ul>
                                    <li>
                                        <div className="content">
                                            <p>Ünvan</p>
                                            <strong>
                                                {SITE_ADDRESS_LINE_1}
                                                <br />
                                                {SITE_ADDRESS_LINE_2}
                                            </strong>
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
                                            <strong>+994 10 427 77 53</strong>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
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
        </>
    );
};

export default SidebarInfo;