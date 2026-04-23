import CountUp from 'react-countup';

const AchievementAward = () => {
    return (
        <>
            <div className="achivement-award-area default-padding overflow-hidden bg-gray">
                <div className="container overflow-hidden">
                    <div className="row align-center">
                        <div className="col-xl-5">
                            <div className="site-title">
                                <h4 className="sub-title">Mükafat və nailiyyətlər</h4>
                                <h2 className="title">Tanınma və uğurlar</h2>
                            </div>
                            <p>
                                1MEDIA komandası illər boyu brendlərin rəqəmsal görünürlüyünü gücləndirməkdə platformalar üzrə tanınmış mükafatlara və müştəri məmnuniyyəti göstəricilərinə nail olub. Keyfiyyətli məzmun, dizayn və marketinq kampaniyaları ilə sektor üzrə etibar qazanmışıq.
                            </p>
                            <div className="achivement-fact">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><CountUp end={25} enableScrollSpy /></div>
                                    </div>
                                    <span className="medium">Tamamlanmış layihələr</span>
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><CountUp end={25} enableScrollSpy /></div>
                                    </div>
                                    <span className="medium">Məmnun müştərilər</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1">
                            <div className="choose-us-style-two">
                                <div className="award-grid">
                                    <div className="award-item">
                                        <i className="fab fa-behance" />
                                        <h4>Behance uğurları</h4>
                                    </div>
                                </div>
                                <div className="award-grid">
                                    <div className="award-item">
                                        <i className="fas fa-layer-group" />
                                        <h4>Dizayn mükafatları</h4>
                                    </div>
                                    <div className="award-item">
                                        <i className="fab fa-laravel" />
                                        <h4>Texniki həllər</h4>
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

export default AchievementAward;