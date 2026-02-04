import { Link } from "react-router-dom";
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const ArchiveWidget = () => {
    return (
        <>
            <div className="sidebar-item archives">
                <h4 className="title">Arxiv</h4>
                <div className="sidebar-info">
                    <ul>
                        <li><Link to="#" onClick={handleSmoothScroll}>Yanvar 2026</Link></li>
                        <li><Link to="#" onClick={handleSmoothScroll}>Fevral 2026</Link></li>
                        <li><Link to="#" onClick={handleSmoothScroll}>Dekabr 2025</Link></li>
                        <li><Link to="#" onClick={handleSmoothScroll}>Noyabr 2025</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ArchiveWidget;