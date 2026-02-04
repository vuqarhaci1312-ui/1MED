import { Link } from "react-router-dom";
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const TagsWidget = () => {
    return (
        <>
            <div className="sidebar-item tags">
                <h4 className="title">Etiketlər</h4>
                <div className="sidebar-info">
                    <ul>
                        <li><Link to="#" onClick={handleSmoothScroll}>Instagram</Link>
                        </li>
                        <li><Link to="#" onClick={handleSmoothScroll}>Marketing</Link>
                        </li>
                        <li><Link to="#" onClick={handleSmoothScroll}>TikTok</Link>
                        </li>
                        <li><Link to="#" onClick={handleSmoothScroll}>Google Ads</Link>
                        </li>
                        <li><Link to="#" onClick={handleSmoothScroll}>SEO</Link>
                        </li>
                        <li><Link to="#" onClick={handleSmoothScroll}>Video</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TagsWidget;