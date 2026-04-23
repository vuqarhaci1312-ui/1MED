import { Link } from "react-router-dom";
import BlogCoverImage from "./BlogCoverImage";

interface DataType {
    id?: number;
    thumb?: string;
    tag?: string;
    author?: string;
    comment?: number;
    date?: string;
    month?: string;
    title?: string;
}

const SingleBlogV2 = ({ blog }: { blog: DataType }) => {
    const { id, thumb, tag, author, comment, title, date, month } = blog

    return (
        <>
            <div className="home-blog-two">
                <div className="thumb">
                    <Link to={`/blog-single-with-sidebar/${id}`}>
                        <BlogCoverImage tag={tag} fileName={thumb} alt={title || "Blog məqaləsi"} width={800} height={600} />
                    </Link>
                    <div className="date">{date} <strong>{month}</strong></div>
                </div>
                <div className="info">
                    <div className="content">
                        <div className="meta">
                            <ul>
                                <li>
                                    <Link to="#">{author}</Link>
                                </li>
                                <li>
                                    <Link to="#">{comment} Comments</Link>
                                </li>
                            </ul>
                        </div>
                        <h3 className="post-title">
                            <Link to={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                        </h3>
                        <Link to={`/blog-single-with-sidebar/${id}`} className="button-regular">
                            Davamı <i className="fas fa-arrow-right" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV2;