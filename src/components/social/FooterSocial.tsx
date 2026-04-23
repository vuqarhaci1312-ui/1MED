import {
    SOCIAL_FACEBOOK_URL,
    SOCIAL_INSTAGRAM_URL,
    SOCIAL_LINKEDIN_URL,
} from "../../constants/socialLinks";

const FooterSocial = () => {
    return (
        <>
            <li>
                <a href={SOCIAL_FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fab fa-facebook-f" />
                </a>
            </li>
            <li>
                <a href={SOCIAL_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                </a>
            </li>
            <li>
                <a href={SOCIAL_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram" />
                </a>
            </li>
        </>
    );
};

export default FooterSocial;
