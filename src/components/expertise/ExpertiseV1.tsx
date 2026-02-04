import ProcessV1 from '../process/ProcessV1';

const ExpertiseV1 = () => {
    return (
        <>
            <div className="container">
                <div className="expertise-area text-center">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="site-heading">
                                <h4 className="sub-title">İş Prinsiplərimiz</h4>
                                <h2 className="title">Rəqəmsal Marketinq Həlləri</h2>
                            </div>
                        </div>
                    </div>
                    <ProcessV1 />
                </div>
            </div>
        </>
    );
};

export default ExpertiseV1;