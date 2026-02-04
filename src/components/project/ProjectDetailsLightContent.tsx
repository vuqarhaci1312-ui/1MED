import { Link } from "react-router-dom";
import banner5 from "/assets/img/banner/5.jpg"
import portfolio13 from "/assets/img/portfolio/13.jpg"
import portfolio14 from "/assets/img/portfolio/14.jpg"
import portfolio15 from "/assets/img/portfolio/15.jpg"
import portfolio44 from "/assets/img/portfolio/44.jpg"
import PortfolioV4Data from "../../../src/assets/jsonData/portfolio/PortfolioV4Data.json";

interface DataType {
    id?: number;
    title?: string;
    tag?: string;
    thumbFull?: string;
    client?: string;
    disciplines?: string;
    description?: string;
    background?: string;
    challenges?: string;
    solution?: string;
    features?: string[];
}

interface ProjectDetailsProps {
    projectInfo?: DataType;
    sectionClass?: string;
    totalProjects?: number;
}

const ProjectDetailsLightContent = ({ projectInfo, sectionClass, totalProjects }: ProjectDetailsProps) => {
    const { 
        title, 
        tag, 
        id, 
        thumbFull, 
        client, 
        disciplines, 
        description, 
        background, 
        challenges, 
        solution, 
        features 
    } = projectInfo || {};

    const currentId = id ? parseInt(id.toString(), 10) : 1;
    const previousId = currentId === 1 ? totalProjects : currentId - 1;
    const nextId = currentId === totalProjects ? 1 : currentId + 1;
    const previousProject = PortfolioV4Data.find((project) => project.id === previousId);
    const nextProject = PortfolioV4Data.find((project) => project.id === nextId);
    const getFirstTwoWords = (text?: string) => text?.split(' ').slice(0, 2).join(' ') || "Başlıq Yoxdur";

    return (
        <>
            {/* 1st Section */}
            <div className={`project-details-items default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-details-thumb">
                                <img src={thumbFull ? `/assets/img/portfolio/${thumbFull}` : banner5} alt="Şəkil Tapılmadı" />
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <div className="project-details-main-info">
                                <div className="project-single-tags">
                                    <Link to="#">{tag || 'Dizayn'}</Link>
                                </div>
                                <h2 className="title">{title}</h2>
                                <div className="project-author-details mt-35">
                                    <ul>
                                        <li>
                                            <div className="left-info">
                                                <h3>Müştəri</h3>
                                            </div>
                                            <div className="right-info">
                                                <h3>{client || 'Müştəri'}</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="left-info">
                                                <h3>İstifadə Olunan Xidmətlər</h3>
                                            </div>
                                            <div className="right-info">
                                                <p className="project-inner-tag">
                                                    {disciplines || 'Xidmət'}
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="left-info">
                                                <h3>Layihə Haqqında</h3>
                                            </div>
                                            <div className="right-info">
                                                <p>
                                                    {description || 'Layihə haqqında məlumat'}
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd Section */}
            <div className="project-details-items bg-gray default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="thumb-grid">
                                <img src={portfolio13} alt="Şəkil" />
                                <img src={portfolio14} alt="Şəkil" />
                            </div>
                        </div>
                        <div className="col-lg-5 pl-50 pl-md-15 pl-xs-15">
                            <div className="check-list">
                                <div className="single-list">
                                    <h4>Xidmətlərimiz</h4>
                                    <p>
                                        {solution || 'Layihə həlləri və xidmətlərimiz haqqında məlumat'}
                                    </p>
                                </div>
                                <div className="single-list">
                                    <h4>Əsas Xüsusiyyətlər</h4>
                                    <ul className="list-disc">
                                        {features && features.length > 0 ? (
                                            features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))
                                        ) : (
                                            <>
                                                <li>Sosial media marketinq</li>
                                                <li>Axtarış motoru optimallaşdırması (SEO)</li>
                                                <li>Məzmun marketinqi</li>
                                                <li>Rəqəmsal idarəetmə</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3rd Section */}
            <div className="project-details-items default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="item-grid-container">
                                <div className="single-grid">
                                    <div className="item-grid-colum">
                                        <div className="left-info">
                                            <h3><strong>01</strong> Arxa Plan</h3>
                                        </div>
                                        <div className="right-info">
                                            <p>
                                                {background || 'Layihənin arxa planı və məqsədi haqqında məlumat'}
                                            </p>
                                        </div>
                                    </div>
                                    <img src={portfolio15} alt="Şəkil Tapılmadı" />
                                </div>
                                <div className="single-grid">
                                    <div className="item-grid-colum">
                                        <div className="left-info">
                                            <h3><strong>02</strong> Çətinliklər</h3>
                                        </div>
                                        <div className="right-info">
                                            <p>
                                                {challenges || 'Layihədə qarşılaşılan çətinliklər və problemlər'}
                                            </p>
                                            <h4>Həll yolu və nəticələr</h4>
                                            <ul className="list-disc">
                                                {features && features.length > 0 ? (
                                                    features.slice(0, 3).map((feature, index) => (
                                                        <li key={index}>{feature}</li>
                                                    ))
                                                ) : (
                                                    <>
                                                        <li>Sosial media marketinq</li>
                                                        <li>Axtarış motoru optimallaşdırması</li>
                                                        <li>Məzmun strategiyası</li>
                                                    </>
                                                )}
                                            </ul>
                                            <img src={portfolio44} alt="Şəkil Tapılmadı" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-grid">
                                    <div className="item-grid-colum">
                                        <div className="left-info">
                                            <h3><strong>03</strong> Həll</h3>
                                        </div>
                                        <div className="right-info">
                                            <p>
                                                {solution || 'Layihə üçün tətbiq olunan həllər və strategiyalar'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4th Section (Navigation) */}
            <div className="project-pagination default-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-paginvation-items">
                                <div className="project-previous">
                                    <Link to={`/project-details-light/${previousId}`}>
                                        <div className="icon"><i className="fas fa-angle-double-left" /></div>
                                        <div className="nav-title"> Əvvəlki Layihə
                                            <h5>{getFirstTwoWords(previousProject?.title)}</h5>
                                        </div>
                                    </Link>
                                </div>
                                <div className="project-all">
                                    <Link to="/project-light"><i className="fas fa-th-large" /></Link>
                                </div>
                                <div className="project-next">
                                    <Link to={`/project-details-light/${nextId}`}>
                                        <div className="nav-title">Növbəti Layihə
                                            <h5>{getFirstTwoWords(nextProject?.title)}</h5>
                                        </div>
                                        <div className="icon"><i className="fas fa-angle-double-right" /></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsLightContent;