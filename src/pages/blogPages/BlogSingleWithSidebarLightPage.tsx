import LayoutV1Light from '../../components/layouts/LayoutV1Light';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import BlogSingleWithSidebarContentLight from '../../components/blog/BlogSingleWithSidebarContentLight';
import { useParams } from 'react-router-dom';
import BlogV3Data from "../../../src/assets/jsonData/blog/BlogV3Data.json"
import { Helmet } from 'react-helmet-async';

const BlogSingleWithSidebarLightPage = () => {

    const { id } = useParams();
    const data = BlogV3Data.find(portfolio => portfolio.id === parseInt(id || '0'));

    return (
        <>
            <Helmet>
                <title>1MEDIA - Blog Məqaləsi</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Blog Məqaləsi' breadCrumb='Blog' LightMode={true} />
                {data && <BlogSingleWithSidebarContentLight sectionClass='default-padding' blogInfo={data} totalBlogs={BlogV3Data.length} />}
            </LayoutV1Light>
        </>
    );
};

export default BlogSingleWithSidebarLightPage;