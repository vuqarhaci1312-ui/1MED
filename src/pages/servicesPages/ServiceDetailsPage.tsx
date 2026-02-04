import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServiceDetailsContent from "../../components/services/ServiceDetailsContent";
import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json"
import { Helmet } from "react-helmet-async";

const ServiceDetailsPage = () => {

    const { id } = useParams();
    const data = ServicesV1Data.find(service => service.id === parseInt(id || '0'));

    return (
        <>
            <Helmet>
                <title>1MEDIA - Strategiyamız</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Strategiyamız' breadCrumb='Strategiya' />
                {data && <ServiceDetailsContent serviceInfo={data} sectionClass='default-padding-bottom' />}
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default ServiceDetailsPage;