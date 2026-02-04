import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import PortfolioV6 from "../../components/portfolio/PortfolioV6";

const Project3Page = () => {
    return (
        <>
            <Helmet>
                <title>1MEDIA - Proyektlər</title>
            </Helmet>

            <div className="project-page">
                <LayoutV1>
                    <Breadcrumb title='Proyektlərimiz' breadCrumb='proyektler' />
                    <PortfolioV6 />
                    <DarkClass />
                </LayoutV1>
            </div>
        </>
    );
};

export default Project3Page;