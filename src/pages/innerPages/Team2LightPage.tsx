import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import QuickContact from "../../components/contact/QuickContact";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import TeamV3 from "../../components/team/TeamV3";

const Team2LightPage = () => {
    return (
        <>
            <Helmet>
                <title>1MEDIA - Komanda</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Komandamız' breadCrumb='komanda' LightMode={true} />
                <TeamV3 hasTitle={false} />
                <QuickContact sectionClass='bg-theme' />
            </LayoutV1Light>
        </>
    );
};

export default Team2LightPage;