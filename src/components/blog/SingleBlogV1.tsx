import { Link } from "react-router-dom";
import BlogCoverImage from "./BlogCoverImage";

interface DataType {
    id?: number;
    thumb?: string;
    tag?: string;
    author?: string;
    dateFull?: string;
    comments?: number;
    month?: string;
    title?: string;
}

const SingleBlogV1 = ({ blog }: { blog: DataType }) => {
    const { id, thumb, tag, author, dateFull, comments, title } = blog

    return (
        <>
            <div className="home-blog-one">
                <div className="thumb">
                    <Link to={`/blog-single-with-sidebar/${id}`}>
                        <BlogCoverImage tag={tag} fileName={thumb} alt={title || "Blog məqaləsi"} width={800} height={1000} />
                    </Link>
                    <div className="date">{dateFull}</div>
                </div>
                <div className="content">
                    <div className="meta">
                        <ul>
                            <li>
                                <Link to="#">{author}</Link>
                            </li>
                            <li>
                                <Link to="#">{comments} Comments</Link>
                            </li>
                        </ul>
                    </div>
                    <h3><Link to={`/blog-single-with-sidebar/${id}`}>{title}</Link></h3>
                    <Link to={`/blog-single-with-sidebar/${id}`} className="button-regular">
                        Davamı
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV1;