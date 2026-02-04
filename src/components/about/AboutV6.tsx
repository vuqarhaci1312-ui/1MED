import thumb2 from "/assets/img/thumb/2.jpg";
import thumb12 from "/assets/img/thumb/12.jpg";
import arrowIcon from "/assets/img/icon/arrow.png";
import arrowTheme from "/assets/img/icon/arrow-theme.png";
import ServiceListData from "../../../src/assets/jsonData/services/ServiceListData.json";
import ServiceList from "../services/ServiceList";
import { Link } from "react-router-dom";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { useState } from "react";

interface DataType {
    lightMode?: boolean;
    sectionClass?: string;
}

const AboutV6 = ({ lightMode, sectionClass }: DataType) => {
    const containerRef = useScrollAnimation();

    const [activeServiceId, setActiveServiceId] = useState(ServiceListData[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className={`about-style-six-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <div className="thumb-style-four">
                                <img src={lightMode ? thumb12 : thumb2} alt="Şəkil Tapılmadı" />
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 col-lg-7">
                            <div className="about-style-six-info text-scroll-animation" ref={containerRef}>
                                <div className="info">
                                    <div className="d-flex">
                                        <Link to="/about-2"><img src={lightMode ? arrowTheme : arrowIcon} alt="Şəkil Tapılmadı" /></Link>
                                        <h2 className="title text">Yaradıcı & Digital Agentlik</h2>
                                    </div>
                                    <p className="text">
                                        Brendinq, marketinq, dizayn və reklam sahəsində peşəkar xidmətlər təqdim edirik. Müştərilərimizlə əməkdaşlıq edərək unikal kampaniyalar, vizual identiklik və rəqəmsal strategiyalar hazırlayırıq. Hədəf auditoriyaya uyğun innovativ həllər təqdim etməkdə ixtisaslaşırıq.
                                    </p>
                                </div>
                                <ul className="service-list">
                                    {ServiceListData.map(service =>
                                        <li
                                            key={service.id}
                                            onMouseEnter={() => handleMouseEnter(service.id)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <Link to="/services" className={`${activeServiceId === service.id ? 'active' : ''}`}>
                                                <ServiceList service={service} />
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV6;