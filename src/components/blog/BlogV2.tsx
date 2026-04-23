import BlogV3Data from '../../../src/assets/jsonData/blog/BlogV3Data.json';
import SingleBlogV2 from './SingleBlogV2';
import SplitText from "../animation/SplitText.jsx"
import { sortBlogsNewestFirst, splitBlogDateForHomeCard } from '../../utils/blogChronology';

interface DataType {
    sectionClass?: string
}

const latestTwoBlogsForHome = sortBlogsNewestFirst(BlogV3Data).slice(0, 2);

const BlogV2 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`blog-area home-blog blog-style-two-area default-padding bottom-less ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Xəbərlər & Məqalələr</h4>
                                <h2 className="title">
                                    <SplitText
                                        delay={150}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Son Bloq Yazıları
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {latestTwoBlogsForHome.map((blog) => {
                            const { day, monthShort } = splitBlogDateForHomeCard(blog.date);
                            const thumb = (blog.thumb || blog.thumbFull || "").trim();
                            return (
                                <div className="col-lg-6 col-md-6 mb-30" key={blog.id}>
                                    <SingleBlogV2
                                        blog={{
                                            id: blog.id,
                                            thumb: thumb || undefined,
                                            tag: blog.tag,
                                            author: blog.author,
                                            comment: 0,
                                            date: day,
                                            month: monthShort,
                                            title: blog.title,
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV2;