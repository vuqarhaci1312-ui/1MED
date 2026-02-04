import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ContactV1 from "../../components/contact/ContactV1";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import ContactMap from "../../components/map/ContactMap";

const ContactUsLightPage = () => {
    return (
        <>
            <Helmet>
                <title>1MEDIA - Əlaqə</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Əlaqə' breadCrumb='elaqe' LightMode={true} />
                <ContactV1 sectionClass='default-padding-top' />
                <ContactMap />
            </LayoutV1Light>
        </>
    );
};

export default ContactUsLightPage;