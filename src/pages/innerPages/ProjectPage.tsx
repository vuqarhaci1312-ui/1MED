import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import PortfolioV2 from "../../components/portfolio/PortfolioV2";

const ProjectPage = () => {
    return (
        <>
            <Helmet>
                <title>1MEDIA - Proyektlər</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Proyektlərimiz' breadCrumb='proyektler' />
                <PortfolioV2 moreBtn={true} sectionClass='default-padding-bottom' />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default ProjectPage;