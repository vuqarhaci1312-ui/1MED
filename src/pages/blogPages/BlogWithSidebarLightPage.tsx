import { Helmet } from "react-helmet-async";
import BlogWithSidebarContentLight from "../../components/blog/BlogWithSidebarContentLight";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";

const BlogWithSidebarLightPage = () => {
    return (
        <>
            <Helmet>
                <title>1MEDIA - Blog</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <LayoutV1Light>
                    <Breadcrumb title='Blog Məqalələri' breadCrumb='Blog' LightMode={true} />
                    <BlogWithSidebarContentLight sectionClass="default-padding" />
                </LayoutV1Light>
            </div>
        </>
    );
};

export default BlogWithSidebarLightPage;