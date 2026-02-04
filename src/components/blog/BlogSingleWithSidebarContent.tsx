import { Link } from "react-router-dom";
import team1Thumb from "/assets/img/team/9.jpg"
import BlogPostComments from './BlogPostComments';
import BlogCommentForm from './BlogCommentForm';
import handleSmoothScroll from '../utilities/handleSmoothScroll';
import SocialShareV3 from '../social/SocialShareV3';
import BlogV3Data from "../../../src/assets/jsonData/blog/BlogV3Data.json";
import SearchWidget from '../widgets/SearchWidget';
import RecentPostsWidget from '../widgets/RecentPostsWidget';
import CategoryWidget from '../widgets/CategoryWidget';
import GalleryWidget from '../widgets/GalleryWidget';
import ArchiveWidget from '../widgets/ArchiveWidget';
import FollowWidget from '../widgets/FollowWidget';
import TagsWidget from '../widgets/TagsWidget';

interface DataType {
    id?: number;
    date?: string;
    dateIcon?: string;
    thumbFull?: string;
    author?: string;
    tag?: string;
    title?: string;
    fullContent?: {
        intro?: string;
        paragraph1?: string;
        paragraph2?: string;
        quote?: string;
        paragraph3?: string;
        subheading?: string;
        listItems?: string[];
        conclusion?: string;
    };
}

interface BlogSingleProps {
    blogInfo?: DataType;
    totalBlogs?: number;
    sectionClass?: string;
}

const BlogSingleWithSidebarContent = ({ blogInfo, totalBlogs, sectionClass }: BlogSingleProps) => {
    const { id, date, dateIcon, thumbFull, author, tag, title, fullContent } = blogInfo || {};

    // Blogs Navigation 
    const currentId = id ? parseInt(id.toString(), 10) : 1;

    // Calculate the previous and next IDs dynamically
    const previousId = currentId === 1 ? totalBlogs : currentId - 1;
    const nextId = currentId === totalBlogs ? 1 : currentId + 1;

    // Get the previous and next project titles
    const previousBlog = BlogV3Data.find((blog) => blog.id === previousId);
    const nextBlog = BlogV3Data.find((blog) => blog.id === nextId);

    // Get the first two words of the project title
    const getFirstTwoWords = (text?: string) => text?.split(' ').slice(0, 2).join(' ') || "Başlıq Yoxdur";

    return (
        <>
            <div className={`blog-area single full-blog right-sidebar full-blog ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">

                                {/* blog Single Post */}
                                <div className="blog-style-one item">
                                    <div className="blog-item-box">
                                        <div className="thumb">
                                                <img src={`/assets/img/blog/${thumbFull}`} width={1075} height={546} alt="Şəkil Tapılmadı" />
                                        </div>
                                        <div className="info">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <Link to="#"><i className="fas fa-user-circle" /> {author}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#"><i className={dateIcon}></i> {date}</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            {fullContent?.intro && <p>{fullContent.intro}</p>}
                                            {fullContent?.paragraph1 && <p>{fullContent.paragraph1}</p>}
                                            {fullContent?.paragraph2 && <p>{fullContent.paragraph2}</p>}
                                            {fullContent?.quote && (
                                                <blockquote>
                                                    {fullContent.quote}
                                                </blockquote>
                                            )}
                                            {fullContent?.paragraph3 && <p>{fullContent.paragraph3}</p>}
                                            {fullContent?.subheading && <h3>{fullContent.subheading}</h3>}
                                            {fullContent?.listItems && fullContent.listItems.length > 0 && (
                                                <ul>
                                                    {fullContent.listItems.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            {fullContent?.conclusion && <p>{fullContent.conclusion}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Post Author */}
                                <div className="post-author">
                                    <div className="thumb">
                                        <img src={team1Thumb} alt="Şəkil Tapılmadı" />
                                    </div>
                                    <div className="info">
                                        <h4><Link to="#" onClick={handleSmoothScroll}>1MEDIA Komandası</Link></h4>
                                        <p>
                                            1MEDIA rəqəmsal marketinq agentliyi olaraq Instagram, Facebook, TikTok, LinkedIn və YouTube platformalarında peşəkar xidmətlər göstəririk. Google Ads və Meta reklamları, qrafik dizayn, dron çəkilişi və video istehsalı ilə brendinizi rəqəmsal dünyada gücləndirir, satışlarınızı artırırıq.
                                        </p>
                                    </div>
                                </div>

                                {/* Post Tags Share */}
                                <div className="post-tags share">
                                    <div className="tags">
                                        <h4>Etiketlər: </h4>
                                        {tag && <Link to="#" onClick={handleSmoothScroll}>{tag}</Link>}
                                        <Link to="#" onClick={handleSmoothScroll}>Rəqəmsal Marketinq</Link>
                                    </div>
                                    <div className="social">
                                        <h4>Paylaş:</h4>
                                        <ul>
                                            <SocialShareV3 />
                                        </ul>
                                    </div>
                                </div>

                                {/* Post Pagination */}
                                <div className="post-pagi-area">
                                    <div className="post-previous">
                                        <Link to={`/blog-single-with-sidebar/${previousId}`}>
                                            <div className="icon"><i className="fas fa-angle-double-left"></i></div>
                                            <div className="nav-title"> Əvvəlki Məqalə <h5>{getFirstTwoWords(previousBlog?.title)}</h5></div>
                                        </Link>
                                    </div>
                                    <div className="post-next">
                                        <Link to={`/blog-single-with-sidebar/${nextId}`}>
                                            <div className="nav-title">Növbəti Məqalə <h5>{getFirstTwoWords(nextBlog?.title)}</h5></div>
                                            <div className="icon"><i className="fas fa-angle-double-right"></i></div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Start Blog Comment */}
                                <div className="blog-comments">
                                    <div className="comments-area">
                                        <div className="comments-title">
                                            <h3>2 Şərh: "{title || 'Blog Məqaləsi'}"</h3>
                                            <BlogPostComments blogId={id} />
                                        </div>
                                        <div className="comments-form">
                                            <div className="title">
                                                <h3>Şərh Yaz</h3>
                                            </div>
                                            <BlogCommentForm />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                <aside>
                                    <SearchWidget />
                                    <RecentPostsWidget />
                                    <CategoryWidget />
                                    <GalleryWidget />
                                    <ArchiveWidget />
                                    <FollowWidget />
                                    <TagsWidget />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSingleWithSidebarContent;
