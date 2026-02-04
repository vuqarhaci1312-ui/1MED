import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import QuickContact from "../../components/contact/QuickContact";
import FaqV1 from "../../components/faq/FaqV1";
import LayoutV1 from "../../components/layouts/LayoutV1";

const FaqPage = () => {
    return (
        <>
            <Helmet>
                <title>1MEDIA - Tez-tez Verilən Suallar</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Tez-tez Verilən Suallar' breadCrumb='faq' />
                <FaqV1 sectionClass='bg-gray' />
                <QuickContact title='Köməyə' titleBold='Ehtiyacın Var?' />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default FaqPage;