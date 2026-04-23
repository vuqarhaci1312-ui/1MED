import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import handleSmoothScroll from '../utilities/handleSmoothScroll';
import SplitText from "../animation/SplitText.jsx"

/** `clients-card` önizləməsi — dairə ölçüsü dəyişmədən kiçik loqo görünüşü üçün CSS */
const CLIENTS_CARD_PREVIEW_LOGOS = [
    "alliancecliniclogo.png",
    "logomedident.jpeg",
    "logowelldiet.PNG",
    "logoan.jpeg",
] as const;

/** `public/assets/img/partner/` — bütün tərəfdaş loqoları */
const PARTNER_LOGO_FILES = [
    "alliancecliniclogo.png",
    "bbmlogo.png",
    "logoan.jpeg",
    "logodoctordent.png",
    "renewlogo.png",
    "logohaciyev.jpeg",
    "logomedident.jpeg",
    "logowelldiet.PNG",
    "medicalcitylogo.png",
    "mindallogo.png",
    "nurlinelogo.png",
] as const;

function partnerLogoAlt(file: string): string {
    const base = file.replace(/\.[^.]+$/i, "").replace(/logo/gi, " ").replace(/[-_]/g, " ").trim();
    return base ? `${base} loqosu` : "Tərəfdaş loqosu";
}

interface DataType {
    sectionClass?: string
}

const ClientsV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`clients-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 mb-md-50">
                            <div className="brand-info">
                                <h4 className="sub-title">Müştərilər</h4>

                                <h2 className="title split-text">
                                    <SplitText
                                        delay={100}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Azərbaycanın Aparıcı Brendləri
                                    </SplitText>
                                </h2>

                                <p className="split-text">
                                    <SplitText
                                        delay={5}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Müxtəlif sənaye sahələrində fəaliyyət göstərən aparıcı şirkətlərlə əməkdaşlıq edərək, onların rəqəmsal marketinq strategiyalarını uğurla həyata keçiririk.
                                    </SplitText>
                                </p>

                                <div className="clients-card mt-10">
                                    {CLIENTS_CARD_PREVIEW_LOGOS.map((file) => (
                                        <img
                                            key={file}
                                            src={`/assets/img/partner/${file}`}
                                            alt={partnerLogoAlt(file)}
                                            loading="lazy"
                                        />
                                    ))}
                                    <Link to="#">
                                        <i className="fas fa-plus" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 offset-xl-1 col-lg-7">
                            <div className="client-style-one-items">
                                <div className="client-style-one-item">
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="count-num"><CountUp end={15} enableScrollSpy /></div>
                                            <div className="operator">+</div>
                                        </div>
                                        <span className="medium">Aktiv Müştəri</span>
                                    </div>
                                </div>
                                {PARTNER_LOGO_FILES.map((file) => (
                                    <div key={file} className="client-style-one-item client-style-one-item--partner">
                                        <img
                                            src={`/assets/img/partner/${file}`}
                                            alt={partnerLogoAlt(file)}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                                <div className="client-style-one-item">
                                    <Link to="#" onClick={handleSmoothScroll}>Hamısına Bax</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientsV1;
