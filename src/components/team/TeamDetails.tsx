import SocialShareV1, { type TeamSocialLinks } from "../social/SocialShareV1";

interface DataType {
    id?: number;
    thumb?: string;
    name?: string;
    designation?: string;
    text?: string;
    age?: string;
    email?: string;
    phone?: string;
    social?: TeamSocialLinks;
}

interface TeamDetailsProps {
    teamInfo: DataType;
    sectionClass?: string;
}

const TeamDetails = ({ teamInfo, sectionClass }: TeamDetailsProps) => {
    const { thumb, name, designation, text, email, social } = teamInfo;
    const mailHref = email?.trim()
        ? `mailto:${email.trim()}?subject=${encodeURIComponent("1MEDIA — əlaqə")}`
        : "mailto:info@1media.az?subject=" + encodeURIComponent("1MEDIA — əlaqə");

    return (
        <>
            <div className={`team-single-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="team-content-top">
                        <div className="row align-center">
                            <div className="col-xl-6 col-lg-5 left-info">
                                <div className="thumb">
                                    <img src={`/assets/img/team/${thumb}`} alt={name || ""} width={800} height={900} />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="team-right-info">
                                    <h2>{name}</h2>
                                    <span>{designation}</span>
                                    <p>{text}</p>
                                    <ul className="user-location">
                                        <li>
                                            <strong>E-poçt:</strong>
                                            <a href={mailHref}>{email || "info@1media.az"}</a>
                                        </li>
                                    </ul>
                                    <div className="social">
                                        <a className="btn circle btn-sm btn-gradient animation" href={mailHref}>
                                            Əlaqə
                                        </a>
                                        <div className="share-link">
                                            <i className="fas fa-share-alt" />
                                            <ul>
                                                <SocialShareV1 social={social} />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetails;