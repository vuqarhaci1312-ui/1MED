import SplitText from "../animation/SplitText.jsx"
import PortfolioV1 from "../portfolio/PortfolioV1";

const ProjectV1 = () => {
    return (
        <>
            <div className="project-style-one-area default-padding blurry-shape-left overflow-hidden">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-4 pr-50 pr-md-15 pr-xs-15">
                            <div className="portfolio-style-one-left-info">
                                <h4 className="sub-title">Son İşlər</h4>
                                <p className="split-text">
                                    <SplitText
                                        delay={5}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Yaradıcılıq və funksionallığın mükəmməl birləşməsini təqdim edirik. Müştərilərimizlə əməkdaşlıq edərək unikal və yaddaqalan rəqəmsal həllər yaradırıq. Hər layihədə innovativ yanaşma və peşəkarlıq nümayiş etdiririk. Sizin brendinizi rəqəmsal dünyada öndə saxlayırıq.
                                    </SplitText>
                                </p>
                                <div className="portfolio-info-card">
                                    <h5>Yaradıcılıq və texnologiyanın mükəmməl harmoniyası</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <PortfolioV1 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectV1;