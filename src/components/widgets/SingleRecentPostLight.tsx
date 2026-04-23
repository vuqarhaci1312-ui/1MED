import { Link } from "react-router-dom";
import BlogCoverImage from "../blog/BlogCoverImage";

interface Blog {
    id: number;
    thumb: string;
    tag?: string;
    title: string;
    date: string;
}

interface SingleRecentPostProps {
    blog: Blog;
}

const SingleRecentPostLight: React.FC<SingleRecentPostProps> = ({ blog }) => {
    const { id, thumb, tag, title, date } = blog;

    const truncateString = (str: string): string => {
        if (str.length <= 47) {
            return str;
        }
        return `${str.slice(0, 47)} ...`;
    };

    const truncatedTitle = truncateString(title);

    return (
        <li>
            <div className="thumb">
                <Link to={`/blog-single-with-sidebar-light/${id}`}>
                    <BlogCoverImage tag={tag} fileName={thumb} alt={title} width={500} height={500} />
                </Link>
            </div>
            <div className="info">
                <div className="meta-title">
                    <span className="post-date">{date}</span>
                </div>
                <Link to={`/blog-single-with-sidebar-light/${id}`}>{truncatedTitle}</Link>
            </div>
        </li>
    );
};

export default SingleRecentPostLight;