import illustration1 from '/assets/img/illustration/1.png';
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import SplitText from "../animation/SplitText.jsx"

interface DataType {
    lightMode?: boolean;
}

const BannerV8 = ({ lightMode }: DataType) => {
    return (
        <>
            <div className="banner-style-eight-area bg-cover"
                style={{ backgroundImage: `url(${lightMode ? "/assets/img/shape/4.jpg" : "/assets/img/shape/3.jpg"})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="banner-style-eight-heading">
                                <div className="banner-title">

                                    <h2>
                                        <SplitText
                                            className="title-left split-text"
                                            delay={150}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            We Are
                                        </SplitText>
                                    </h2>

                                    <h2 className="title-right split-text">
                                        <SplitText
                                            delay={150}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            The Ones
                                        </SplitText>
                                    </h2>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="thumb">
                                <img src={illustration1} alt="Şəkil Tapılmadı" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="d-grid">
                                <h4>1MEDIA</h4>
                                <div className="right">
                                    <p>
                                        Brendinq, marketinq, dizayn və reklamda innovativ həllər təqdim edirik. Müştərilərlə əməkdaşlıq edərək hədəf auditoriyaya uyğun unikal kampaniyalar, vizual identiklik və rəqəmsal strategiyalar hazırlayırıq. Xidmətlərimizə qrafik dizayn, kontent yaradılması və sosial media idarəçiliyi daxildir.
                                    </p>
                                    <Link className="btn-animation mt-10" to="/about-2"><i className="fas fa-arrow-right" /> <span>Bax</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 offset-xl-1">
                            <div className="card-style-one">
                                <div className="bottom">
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer"><CountUp end={31} enableScrollSpy /></div>
                                            <div className="operator">K</div>
                                        </div>
                                        <span className="medium">Tamamlanmış Layihələr</span>
                                    </div>
                                    <Link to="/project"><i className="fas fa-long-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV8;