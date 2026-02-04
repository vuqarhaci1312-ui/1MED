import { Link } from "react-router-dom";
import NewsletterV2 from '../newsletter/NewsletterV2';
import FooterSocial from '../social/FooterSocial';

const FooterV3 = () => {
    return (
        <>
            <footer>
                <div className="footer-box">
                    <div className="container">
                        <div className="f-items">
                            <div className="row">
                                <div className="col-lg-6 footer-item about pr-120 pr-md-15 pr-xs-15 pr-md-15 pr-xs-15">
                                    <div className="top">
                                        <h2>Dəstəyə ehtiyacınız var?</h2>
                                        <a className="quick-btn" href="mailto:info@1media.az">
                                            <i className="fas fa-long-arrow-right" />
                                        </a>
                                    </div>
                                    <ul className="address-list">
                                        <li>
                                            <h4>Bakı</h4>
                                            <p>
                                                Azərbaycan Respublikası, Bakı şəhəri, Nəsimi rayonu
                                            </p>
                                        </li>
                                        <li>
                                            <h4>İş Saatları</h4>
                                            <p>
                                                Bazar ertəsi - Cümə: 09:00 - 18:00
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-5 offset-lg-1 footer-item">
                                    <h4 className="widget-title">Faydalı Linklər</h4>
                                    <ul className="useful-link">
                                        <li><Link to="/about-2">Haqqımızda</Link></li>
                                        <li><Link to="/contact-us">Əlaqə</Link></li>
                                        <li><Link to="/faq">Suallar</Link></li>
                                        <li><Link to="/services-2">Xidmətlər</Link></li>
                                        <li><Link to="/about-2">İstifadə Şərtləri</Link></li>
                                        <li><Link to="/about-2">Məxfilik Siyasəti</Link></li>
                                        <li><Link to="/team-2">Komanda</Link></li>
                                        <li><Link to="/project">Proyektlər</Link></li>
                                    </ul>
                                    <NewsletterV2 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="footer-social">
                                        <FooterSocial />
                                    </ul>
                                </div>
                                <div className="col-lg-6 text-end">
                                    <p>
                                        Copyright &copy; {(new Date().getFullYear())} 1MEDIA. Bütün hüquqlar qorunur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV3;