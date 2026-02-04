interface DataType {
    sectionClass?: string
}

const FaqV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`faq-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row gutter-xl">
                        <div className="col-lg-6">
                            <div className="faq-style-one accordion" id="faqAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            Sosial Media Marketinqi Nədir?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>
                                                Sosial media marketinqi Instagram, Facebook, LinkedIn, TikTok və digər platformalarda brendinizi tanıtmaq, auditoriyanızla əlaqə qurmaq və satışları artırmaq üçün istifadə olunan strategiyadır. 1MEDIA olaraq biz sosial media strategiyası hazırlayır, məzmun planlaması edir, reklam kampaniyaları idarə edir və hesablarınızı böyüdürük. Hədəf auditoriyanıza çatmaq və engagement artırmaq üçün müxtəlif formatlar və taktikalardan istifadə edirik.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Google Ads Kampaniyası Nə Qədər Vaxt Nəticə Verir?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>
                                                Google Ads kampaniyası adətən 1-2 həftə ərzində ilk nəticələri göstərməyə başlayır. Amma optimal performans üçün 4-6 həftə lazımdır. Bu müddət ərzində kampaniyanı optimallaşdırırıq, açar sözləri təkmilləşdiririk və konversiya dərəcəsini artırırıq. 1MEDIA olaraq biz kampaniyanın ilk günlərindən başlayaraq davamlı monitorinq və optimallaşdırma həyata keçiririk ki, müştərilərimiz ən yaxşı ROI əldə etsinlər.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            Instagram Reels Kampaniyası Necə Hazırlanır?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>
                                                Instagram Reels kampaniyası üçün əvvəlcə brendinizin məqsədlərini və hədəf auditoriyanızı müəyyənləşdiririk. Sonra məzmun strategiyası hazırlayırıq, trend audio-lardan istifadə edirik və həftəlik Reels seriyası planlaşdırırıq. Hashtag strategiyası və optimal paylaşım vaxtları müəyyənləşdirilir. 1MEDIA olaraq biz Reels formatında keyfiyyətli video məzmun yaradırıq və alqoritmə uyğun optimallaşdırma həyata keçiririk ki, organic reach maksimum olsun.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-style-one accordion" id="faqAccordion2">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            SEO Optimallaşdırması Nə Qədər Vaxt Alır?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse show" aria-labelledby="heading4" data-bs-parent="#faqAccordion2">
                                        <div className="accordion-body">
                                            <p>
                                                SEO optimallaşdırması uzunmüddətli prosesdir. İlk nəticələr adətən 3-6 ay ərzində görünür, amma tam effekt 6-12 ay ərzində əldə olunur. Texniki SEO, məzmun optimallaşdırması və link building kimi amillər nəticəyə təsir edir. 1MEDIA olaraq biz SEO audit keçiririk, məzmun strategiyası hazırlayırıq və davamlı optimallaşdırma həyata keçiririk ki, saytınız axtarış motorlarında yüksək mövqelərdə görünsün.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading5">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            Brend İdentifikasiyası Layihəsi Nə Qədər Vaxt Çəkir?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion2">
                                        <div className="accordion-body">
                                            <p>
                                                Brend identifikasiyası layihəsi kompleksliyindən asılı olaraq 2-8 həftə çəkə bilər. Bu prosesə loqo dizaynı, vizual identifikasiya, rəng palitrası, tipografiya və brand guidelines daxildir. 1MEDIA olaraq biz müştərilərimizlə sıx əməkdaşlıq edərək brendinizin unikal şəxsiyyətini yaradırıq və bütün materiallarda konsistent istifadə üçün brand guidelines hazırlayırıq.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading6">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                                            YouTube Monetizasiya Üçün Nə Lazımdır?
                                        </button>
                                    </h2>
                                    <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion2">
                                        <div className="accordion-body">
                                            <p>
                                                YouTube monetizasiyası üçün ən azı 1000 abunəçi və son 12 ay ərzində 4000 saat izlənmə lazımdır. Bundan əlavə, məzmun YouTube Community Guidelines-a uyğun olmalıdır. 1MEDIA olaraq biz YouTube strategiyası hazırlayırıq, məzmun optimallaşdırması edirik, AdSense hesabı qurulmasında kömək edirik və partner programları ilə əlaqələndiririk. Thumbnail dizaynı və SEO optimallaşdırması ilə CTR və izlənmələri artırırıq.
                                            </p>
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

export default FaqV1;