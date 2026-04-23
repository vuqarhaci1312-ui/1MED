import { SITE_MAP_EMBED_URL } from "../../constants/siteAddress";

const ContactMap = () => {
    return (
        <>
            <div className="maps-area bg-gray overflow-hidden">
                <div className="google-maps">
                    <iframe
                        title="1MEDIA — A.Y Plaza, Əhməd Rəcəbli 1/25"
                        src={SITE_MAP_EMBED_URL}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </>
    );
};

export default ContactMap;