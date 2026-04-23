import { useParams } from "react-router-dom";
import AchievementAward from "../../components/awards/AchievementAward";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import TeamDetails from "../../components/team/TeamDetails";
import TeamQualification from "../../components/team/TeamQualification";
import TeamV1Data from "../../../src/assets/jsonData/team/TeamV1Data.json";
import TeamV3Data from "../../../src/assets/jsonData/team/TeamV3Data.json";
import { Helmet } from "react-helmet-async";

const TeamDetailsPage = () => {

    const { id } = useParams();
    const numericId = parseInt(id || "0", 10);
    const data = TeamV3Data.find((team) => team.id === numericId)
        ?? TeamV1Data.find((team) => team.id === numericId);

    return (
        <>
            <Helmet>
                <title>Dixor - Team Details</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Team Details' breadCrumb='team-details' />
                {data && <TeamDetails teamInfo={data} sectionClass='default-padding-bottom' />}
                <AchievementAward />
                <TeamQualification />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default TeamDetailsPage;