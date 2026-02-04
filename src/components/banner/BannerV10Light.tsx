import thumb13 from '/assets/img/thumb/13.jpg'
import CountUp from 'react-countup';

const BannerV10Light = () => {
    return (
        <>
            <div className="banner-style-ten-area bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/7.jpg)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-8 col-lg-7 pl-60 pl-md-15 pl-xs-15 order-lg-last">
                            <div className="banner-ten-content">
                                <h2>İdeyaları <strong>Rəqəmsal</strong> <b>reallığa</b> çeviririk</h2>
                                <p>
                                    Brendinq, marketinq, dizayn və reklamda innovativ həllər təqdim edirik. Müştərilərlə əməkdaşlıq edərək hədəf auditoriyaya uyğun unikal kampaniyalar, vizual identiklik və rəqəmsal strategiyalar hazırlayırıq. Xidmətlərimizə qrafik dizayn, kontent yaradılması və sosial media idarəçiliyi daxildir.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="banner-style-ten-left-info">
                                <img src={thumb13} alt="Şəkil Tapılmadı" />
                                <div className="fun-fact-style-two">
                                    <div className="counter">
                                        <div className="timer"><CountUp end={28} enableScrollSpy /></div>
                                        <div className="operator">K</div>
                                    </div>
                                    <span className="medium">Tamamlanmış Layihələr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV10Light;