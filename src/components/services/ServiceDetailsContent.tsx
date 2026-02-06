import banner6 from "/assets/img/banner/6.jpg";
import portfolio45 from "/assets/img/portfolio/45.jpg";
import portfolio46 from "/assets/img/portfolio/46.jpg";
import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";
import { Link } from "react-router-dom";

interface DataType {
    title?: string;
}

interface ServiceDetailsProps {
    serviceInfo?: DataType;
    sectionClass?: string;
}

const ServiceDetailsContent = ({ serviceInfo: _serviceInfo, sectionClass }: ServiceDetailsProps) => {

    return (
        <>
            <div className={`services-details-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="service-single-thumb">
                                    <img src={banner6} alt="Thumb" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7">
                                <h2>1MEDIA Rəqəmsal Marketinq Strategiyası</h2>
                                <p>
                                    Müasir rəqəmsal dünyada uğurlu olmaq üçün düzgün strategiya və peşəkar icra tələb olunur. 1MEDIA olaraq biz hər bir layihəyə fərdi yanaşır, brendinizin xüsusiyyətlərini və hədəf auditoriyanızı dərindən təhlil edərək sizin üçün ən effektiv marketinq strategiyasını hazırlayırıq. Məqsədimiz sadəcə görünürlük yaratmaq deyil, real satış və ROI artımı təmin etməkdir.
                                </p>
                                <p>
                                    Data-driven yanaşma ilə hər addımımızı ölçərək və optimallaşdıraraq irəliləyirik. Google Analytics, Meta Insights və digər analitik alətlər vasitəsilə kampaniyalarınızın performansını real vaxt rejimində izləyir və lazımi dəyişiklikləri dərhal tətbiq edirik.
                                </p>
                            </div>
                            <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                                <p>
                                    Strategiyamızın əsas komponentləri brendinizi rəqəmsal dünyada ön plana çıxarır və rəqiblərinizlə aranızda fərq yaradır.
                                </p>
                                <ul className="feature-list-item">
                                    <li>Hədəf Auditoriya Təhlili</li>
                                    <li>Rəqib Araşdırması</li>
                                    <li>Məzmun Strategiyası</li>
                                    <li>Performans İzləmə</li>
                                    <li>A/B Test & Optimallaşdırma</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-50 mt-xs-20">
                            <div className="process-style-two">
                                <div className="process-style-two-item">
                                    <span>01</span>
                                    <h4>Kəşfiyyat & Təhlil</h4>
                                    <p>
                                        Brendiniz, sənayəniz və rəqibləriniz haqqında dərin araşdırma aparır, hədəf auditoriya davranışlarını təhlil edirik.
                                    </p>
                                </div>
                                <div className="process-style-two-item">
                                    <span>02</span>
                                    <h4>Strategiya Hazırlığı</h4>
                                    <p>
                                        Təhlil nəticələrinə əsasən sizin üçün xüsusi rəqəmsal marketinq strategiyası və məzmun planı hazırlayırıq.
                                    </p>
                                </div>
                                <div className="process-style-two-item">
                                    <span>03</span>
                                    <h4>İcra & Monitorinq</h4>
                                    <p>
                                        Strategiyanı həyata keçirir, kampaniyaları idarə edir və performansı daim izləyib optimallaşdırırıq.
                                    </p>
                                </div>
                                <div className="process-style-two-item">
                                    <span>04</span>
                                    <h4>Hesabat & İnkişaf</h4>
                                    <p>
                                        Detallı hesabatlar təqdim edir, nəticələri təhlil edərək növbəti mərhələlər üçün strategiya təkmilləşdiririk.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-80 mt-xs-50 gallery-two-columns">
                            <div className="col-md-6">
                                <img src={portfolio45} alt="Şəkil Tapılmadı" />
                            </div>
                            <div className="col-md-6">
                                <img src={portfolio46} alt="Şəkil Tapılmadı" />
                            </div>
                        </div>
                        <div className="d-grid colums-2 mt-50">
                            <div className="item">
                                <div className="faq-style-one faq-style-two">
                                    <h2 className="mb-30">Tez-tez verilən suallar</h2>
                                    <div className="accordion" id="faqAccordion">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Nə qədər müddətdə nəticə əldə edə bilərik?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        İlk nəticələr 2-4 həftə ərzində görünməyə başlayır. Ancaq stabil və davamlı artım üçün 3-6 aylıq strategiya tövsiyə edirik.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Hansı platformalarda xidmət göstərirsiniz?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Instagram, Facebook, TikTok, LinkedIn, YouTube platformalarında tam xidmət, həmçinin Google Ads və Meta reklamları idarəetməsi təklif edirik.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Aylıq hesabat alıram?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Bəli, hər ay detallı performans hesabatı və növbəti ay üçün strategiya planı təqdim edirik. Real-time dashboard-a da giriş əldə edirsiniz.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <h2>Niyə 1MEDIA?</h2>
                                <p>
                                    Biz sadəcə xidmət göstərən agentlik deyil, brendinizin rəqəmsal uğur tərəfdaşıyıq. Hər bir layihəyə şəxsi yanaşır, komandamızın təcrübəsi və yaradıcılığı ilə sizi rəqiblərinizlə fərqləndiririk.
                                </p>
                                <p>
                                    5+ illik təcrübə, 250+ uğurlu layihə və 50+ aktiv müştəri. Google Partner və YouTube sertifikatlarımız peşəkarlığımızın sübutudur. Real nəticələr, şəffaf hesabatlar və daim əlçatan dəstək - 1MEDIA-nın fərqləndirici xüsusiyyətləridir.
                                </p>
                            </div>
                        </div>
                        <div className="services-more mt-100 mt-xs-30">
                            <h2 className="mb-20">Digər Xidmətlərimiz</h2>
                            <div className="row">
                                {ServicesV1Data.slice(0, 3).map(service =>
                                    <div className="col-lg-4 col-md-6" key={service.id}>
                                        <div className="item">
                                            <img src={`/assets/img/icon/${service.icon}`} alt="Şəkil Tapılmadı" width={75} height={60} />
                                            <h4><Link to={`/service-details/${service.id}`}>{service.title}</Link></h4>
                                            <p>{service.text}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;