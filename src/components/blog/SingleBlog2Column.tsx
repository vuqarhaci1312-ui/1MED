import { Link } from "react-router-dom";
import BlogCoverImage from "./BlogCoverImage";

interface DataType {
    id?: number;
    thumb?: string;
    tag?: string;
    title?: string;
    author?: string;
    date?: string;
}

const SingleBlog2Column = ({ blog }: { blog: DataType }) => {
    const { id, thumb, tag, author, title, date } = blog

    return (
        <>
            <div className="home-blog-style-one">
                <div className="thumb">
                    <Link to={`/blog-single-with-sidebar/${id}`}>
                        <BlogCoverImage tag={tag} fileName={thumb} alt={title || "Blog məqaləsi"} width={800} height={600} />
                    </Link>
                    <div className="info">
                        <div className="meta">
                            <ul>
                                <li>
                                    <Link to="#">{author}</Link>
                                </li>
                                <li>{date}</li>
                            </ul>
                        </div>
                        <h2 className="post-title">
                            <Link to={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                        </h2>
                        <Link to={`/blog-single-with-sidebar/${id}`} className="button-regular">
                            Davamı
                            <i className="fas fa-long-arrow-right" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog2Column;