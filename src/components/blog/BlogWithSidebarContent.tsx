import BlogData from '../../../src/assets/jsonData/blog/BlogData.json';
import ArchiveWidget from '../widgets/ArchiveWidget';
import CategoryWidget from '../widgets/CategoryWidget';
import FollowWidget from '../widgets/FollowWidget';
import GalleryWidget from '../widgets/GalleryWidget';
import RecentPostsWidget from '../widgets/RecentPostsWidget';
import SearchWidget from '../widgets/SearchWidget';
import TagsWidget from '../widgets/TagsWidget';
import SingleBlogStandard from './SingleBlogStandard';
import { useEffect, useState } from 'react';
import Pagination from 'react-paginate';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

interface DataType {
    sectionClass?: string;
}

const BlogWithSidebarContent = ({ sectionClass }: DataType) => {

    // Pagination and Category Filter
    const navigate = useNavigate();
    const { page } = useParams<{ page?: string }>();
    const [searchParams] = useSearchParams();
    const categoryFilter = searchParams.get('category') || 'Hamısı';

    // Set initial page from URL
    const currentPageNumber = Number(page) || 1;
    const [currentPage, setCurrentPage] = useState(currentPageNumber);
    const [itemsPerPage] = useState(3);

    useEffect(() => {
        setCurrentPage(currentPageNumber);
    }, [currentPageNumber]);

    // Filter blogs by category
    const filteredBlogs = categoryFilter === 'Hamısı' 
        ? BlogData 
        : BlogData.filter(blog => {
            // Map tags to categories
            const categoryMap: { [key: string]: string[] } = {
                'Sosial Media': ['Sosial Media', 'Influencer', 'LinkedIn', 'Reels', 'Micro-Influencer'],
                'Reklam': ['Reklam', 'Facebook Ads'],
                'SEO & Analitika': ['SEO', 'Analitika', 'ROI', 'Voice Search', 'Zero-Click SEO'],
                'Video & Məzmun': ['Video', 'Məzmun', 'Məzmun Planı', 'Interactive Content', 'UGC Strategy'],
                'YouTube': ['YouTube', 'AdSense', 'YouTube Gəlir'],
                'TikTok': ['TikTok', 'TikTok Gəlir'],
                'Strategiya': ['Strategiya', 'Branding', 'Email Marketing', 'Community Growth'],
                'Freelancing': ['Freelancing', 'LinkedIn Premium', 'Personal Branding', 'Affiliate Marketing', 'Podcast'],
                'AI Marketing Tools': ['AI Marketing', 'AI Design', 'AI Copywriting', 'AI SEO', 'AI Tools', 'AI CRM', 'AI Analytics', 'AI Social Media', 'AI Video', 'AI Automation'],
                '2026 Trendləri': ['Web3 Marketing', 'NFT Marketing', 'Privacy Marketing', 'Sustainability'],
                'Texnologiya': ['AI & Automation']
            };

            // Check if blog tag matches the selected category
            const tagsInCategory = categoryMap[categoryFilter] || [];
            return tagsInCategory.includes(blog.tag);
        });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogData = filteredBlogs.slice(startIndex, endIndex);

    const handlePageClick = (data: any) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);

        // Update the URL dynamically with category filter
        const categoryParam = categoryFilter !== 'Hamısı' ? `&category=${categoryFilter}` : '';
        navigate(`/blog-with-sidebar?page=${selectedPage}${categoryParam}`);

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    // Reset to page 1 when category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [categoryFilter]);

    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

    return (
        <>
            <div className={`blog-area full-blog ${sectionClass}`}>
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                                <div className="blog-item-box">
                                    {currentBlogData.length > 0 ? (
                                        currentBlogData.map(blog =>
                                            <SingleBlogStandard blog={blog} key={blog.id} />
                                        )
                                    ) : (
                                        <div style={{
                                            padding: '60px 20px',
                                            textAlign: 'center',
                                            backgroundColor: '#f8f9fa',
                                            borderRadius: '8px',
                                            marginBottom: '30px'
                                        }}>
                                            <i className="fas fa-search" style={{ fontSize: '48px', color: '#ccc', marginBottom: '20px' }}></i>
                                            <h4 style={{ marginBottom: '10px' }}>Bu kateqoriyada blog tapılmadı</h4>
                                            <p style={{ color: '#666' }}>Digər kateqoriyalara baxın və ya axtarış funksiyasından istifadə edin.</p>
                                        </div>
                                    )}
                                </div>

                                {/* Pagination */}
                                {filteredBlogs.length > itemsPerPage && (
                                    <div className="row">
                                        <div className="col-md-12 pagi-area text-center">
                                            <Pagination
                                                previousLabel={currentPage === 1 ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-left'></i>}
                                                nextLabel={currentPage === totalPages ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-right'></i>}
                                                breakLabel={'...'}
                                                pageCount={totalPages}
                                                marginPagesDisplayed={2}
                                                pageRangeDisplayed={5}
                                                onPageChange={handlePageClick}
                                                containerClassName={'pagination text-center'}
                                                activeClassName={'active'}
                                                pageClassName={'page-item'}
                                                pageLinkClassName={'page-link'}
                                                previousLinkClassName={'page-link'}
                                                nextLinkClassName={'page-link'}
                                            />
                                        </div>
                                    </div>
                                )}
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

export default BlogWithSidebarContent;