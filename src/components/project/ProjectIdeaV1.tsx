const ProjectIdeaV1 = () => {
    return (
        <>
            <div className="contact-panel-bg" style={{ backgroundImage: 'url(/assets/img/about/3.jpg)' }} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h4 className="sub-title">Layihəniz varmı?</h4>
                        <h2 className="title">Dərhal dəstək üçün <br /> Bizimlə əlaqə saxlayın</h2>
                        <ul className="contact-list">
                            <li>
                                <div className="icon">
                                    <i className="fas fa-phone" />
                                </div>
                                <div className="info">
                                    <h4>Telefon</h4>
                                    <a className="phone-link" href="tel:+994501234567">+994 50 123 45 67</a> <br />
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-envelope-open" />
                                </div>
                                <div className="info">
                                    <h4>Rəsmi Email</h4>
                                    <a href="mailto:info@1media.az">info@1media.az</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectIdeaV1;