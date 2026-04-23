const ProjectIdeaV1 = () => {
    return (
        <>
            <div className="contact-panel-bg" style={{ backgroundImage: 'url(/assets/img/thumb/elaqesaxla.webp)' }} />
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
                                    <a className="phone-link" href="tel:+994104277753">+994 10 427 77 53</a> <br />
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