import ProcessV1Light from '../process/ProcessV1Light';

const ExpertiseV1Light = () => {
    return (
        <>
            <div className="container">
                <div className="expertise-area text-center">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="site-heading">
                                <h4 className="sub-title">Prosesimiz</h4>
                                <h2 className="title">Ən yaxşı həllər təqdim edirik</h2>
                            </div>
                        </div>
                    </div>
                    <ProcessV1Light />
                </div>
            </div>
        </>
    );
};

export default ExpertiseV1Light;