import TeamV3Data from "../../../src/assets/jsonData/team/TeamV3Data.json";
import SingleTeamV3 from './SingleTeamV3';
import SplitText from "../animation/SplitText.jsx"

/** Bu şəbəkədə Xatun Kərimova və Aysun Cəlilzadə kartları göstərilmir */
const teamForStyleThreeGrid = TeamV3Data.filter(
    (t) => t.name !== "Xatun Kərimova" && t.name !== "Aysun Cəlilzadə",
).slice(0, 4);

interface DataType {
    hasTitle?: boolean;
    sectionClass?: string;
}

const TeamV3 = ({ hasTitle, sectionClass }: DataType) => {
    return (
        <>
            <div className={`team-style-three-area default-padding bottom-less ${sectionClass ? sectionClass : ""}`}>

                {/* Team Title  */}
                {hasTitle &&
                    <div className="container">
                        <div className="site-heading">
                            <div className="row align-center">
                                <div className="col-lg-12">
                                    <h4 className="sub-title">Komanda Üzvlərimiz</h4>
                                    <h2 className="title split-text">
                                        <SplitText
                                            delay={120}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Peşəkarlarımızla Tanış Olun
                                        </SplitText>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container-full">
                    <div className="row">
                        {teamForStyleThreeGrid.map((team) =>
                            <div className="col-xl-3 col-md-6 mb-30" key={team.id}>
                                <SingleTeamV3 team={team} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV3;