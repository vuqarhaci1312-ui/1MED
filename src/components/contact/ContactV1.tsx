import { SITE_ADDRESS_LINE_1, SITE_ADDRESS_LINE_2 } from "../../constants/siteAddress";
import ContactForm from "../form/ContactForm";
import FooterSocial from "../social/FooterSocial";

interface DataType {
    sectionClass?: string
}

const ContactV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`contact-area overflow-hidden relative ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="contact-style-one-items">
                        <div className="row">
                            <div className="col-tact-stye-one col-lg-4">
                                <div className="contact-style-one-info">
                                    <ul className="contact-address">
                                        <li>
                                            <a className="phone-link" href="tel:+994104277753"><i className="fas fa-user-headset" /> +994 10 427 77 53</a>
                                        </li>
                                        <li>
                                            <div className="info">
                                                <h4>Ünvan</h4>
                                                <p>
                                                    {SITE_ADDRESS_LINE_1}
                                                    <br />
                                                    {SITE_ADDRESS_LINE_2}
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info">
                                                <h4>Rəsmi E-poçt</h4>
                                                <a href="mailto:info@1media.az">info@1media.az</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info">
                                                <ul className="social-link">
                                                    <FooterSocial />
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-tact-stye-one col-lg-7 offset-lg-1">
                                <div className="contact-form-style-one">
                                    <h4 className="sub-title">Sualınız Varmı?</h4>
                                    <h2 className="title">Bizimlə Əlaqə Saxlayın</h2>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV1;