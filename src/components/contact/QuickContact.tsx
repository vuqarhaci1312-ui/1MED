import { Link } from "react-router-dom";
import SplitTextV2 from "../animation/SplitTextV2.jsx"
import useScrollAnimation from "../../hooks/useScrollAnimation";

interface DataType {
    sectionClass?: string;
    title?: string;
    titleBold?: string
}

const QuickContact = ({ sectionClass, title, titleBold }: DataType) => {
    const containerRef = useScrollAnimation();

    return (
        <>
            <div className={`quick-contact-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="quick-contact-items text-scroll-animation" ref={containerRef}>

                                <h2 className="split-text">
                                    <SplitTextV2
                                        delay={150}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        {title ? title : "Gəlin"} <span>&nbsp;</span> <strong>{titleBold ? titleBold : 'Birlikdə'}</strong>

                                    </SplitTextV2>
                                </h2>

                                <div className="pl-100 pl-xs-0 d-flex align-items-center">
                                    <p className="text">
                                        Brendinizi rəqəmsal dünyada inkişaf etdirmək üçün 1MEDIA komandası ilə əməkdaşlığa başlayın. Biz sosial media, reklam kampaniyaları, məzmun yaradıcılığı və strateji marketinq həlləri ilə sizə dəstək oluruq. Uğurunuz bizim missiyamızdır!
                                    </p>
                                    <div className="btn-large-border text-end">
                                        <Link to="/contact-us"><i className="fas fa-long-arrow-right" /> Əlaqə Saxlayın</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuickContact;