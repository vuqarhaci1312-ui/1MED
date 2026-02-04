import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import QuickContact from "../../components/contact/QuickContact";
import FaqV1 from "../../components/faq/FaqV1";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";

const FaqLightPage = () => {
    return (
        <>
            <Helmet>
                <title>1MEDIA - Tez-tez Verilən Suallar</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Tez-tez Verilən Suallar' breadCrumb='faq' LightMode={true} />
                <FaqV1 />
                <QuickContact title='Köməyə' titleBold='Ehtiyacın Var?' sectionClass='bg-theme' />
            </LayoutV1Light>
        </>
    );
};

export default FaqLightPage;