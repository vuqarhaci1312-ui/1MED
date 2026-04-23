import { ToastContainer } from "react-toastify";
import { SOCIAL_WHATSAPP_WA_URL } from "../../constants/socialLinks";

const Dependency = () => {
    return (
        <>
            <a
                href={SOCIAL_WHATSAPP_WA_URL}
                className="whatsapp-float-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp ilə əlaqə"
            >
                <i className="fab fa-whatsapp" aria-hidden />
            </a>
            <ToastContainer />
        </>
    );
};

export default Dependency;
