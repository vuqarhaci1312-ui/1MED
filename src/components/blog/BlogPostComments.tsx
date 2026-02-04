import { Link } from "react-router-dom";
import handleSmoothScroll from '../utilities/handleSmoothScroll';
import BlogCommentsData from '../../assets/jsonData/blog/BlogCommentsData.json';

interface BlogPostCommentsProps {
    blogId?: number;
}

const BlogPostComments = ({ blogId = 1 }: BlogPostCommentsProps) => {
    // Get comments for this specific blog
    const comments = BlogCommentsData[blogId.toString() as keyof typeof BlogCommentsData] || [];

    return (
        <>
            <div className="comments-list">
                {comments.map((comment) => (
                    <div key={comment.id} className={`comment-item ${comment.isReply ? 'reply' : ''}`}>
                        <div className="avatar">
                            <img src={comment.image} width={800} height={800} alt="Şəkil Tapılmadı" />
                        </div>
                        <div className="content">
                            <div className="title">
                                <h5>{comment.name}
                                    <span className="reply">
                                        <Link to="#" onClick={handleSmoothScroll}><i className="fas fa-reply"></i> Cavabla</Link>
                                    </span>
                                </h5>
                                <span>{comment.date}</span>
                            </div>
                            <p>
                                {comment.comment}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BlogPostComments;
