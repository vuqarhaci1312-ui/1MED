import LayoutV1Light from '../../components/layouts/LayoutV1Light';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import PortfolioV2 from '../../components/portfolio/PortfolioV2';
import { Helmet } from 'react-helmet-async';

const ProjectLightPage = () => {
    return (
        <>
            <Helmet>
                <title>1MEDIA - Proyektlər</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Proyektlərimiz' breadCrumb='proyektler' LightMode={true} />
                <PortfolioV2 moreBtn={true} sectionClass='default-padding' />
            </LayoutV1Light>
        </>
    );
};

export default ProjectLightPage;