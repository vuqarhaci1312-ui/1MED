import { Link, useSearchParams, useLocation } from "react-router-dom";
import BlogData from '../../assets/jsonData/blog/BlogData.json';

const CategoryWidget = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const currentCategory = searchParams.get('category') || 'Hamısı';
    
    // Detect if we're on light mode page
    const isLightMode = location.pathname.includes('-light');
    const basePath = isLightMode ? '/blog-with-sidebar-light' : '/blog-with-sidebar';

    // Category mapping: which tags belong to which category
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

    // Calculate blog count for each category
    const getCategoryCount = (category: string) => {
        if (category === 'Hamısı') return BlogData.length;
        const tags = categoryMap[category] || [];
        return BlogData.filter(blog => tags.includes(blog.tag)).length;
    };

    const categories = [
        { name: 'Hamısı', count: getCategoryCount('Hamısı') },
        { name: 'AI Marketing Tools', count: getCategoryCount('AI Marketing Tools') },
        { name: '2026 Trendləri', count: getCategoryCount('2026 Trendləri') },
        { name: 'Sosial Media', count: getCategoryCount('Sosial Media') },
        { name: 'YouTube', count: getCategoryCount('YouTube') },
        { name: 'TikTok', count: getCategoryCount('TikTok') },
        { name: 'Reklam', count: getCategoryCount('Reklam') },
        { name: 'SEO & Analitika', count: getCategoryCount('SEO & Analitika') },
        { name: 'Video & Məzmun', count: getCategoryCount('Video & Məzmun') },
        { name: 'Strategiya', count: getCategoryCount('Strategiya') },
        { name: 'Freelancing', count: getCategoryCount('Freelancing') },
        { name: 'Texnologiya', count: getCategoryCount('Texnologiya') }
    ];

    return (
        <>
            <div className="sidebar-item category">
                <h4 className="title">Kateqoriyalar</h4>
                <div className="sidebar-info">
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index}>
                                <Link 
                                    to={category.name === 'Hamısı' ? basePath : `${basePath}?category=${encodeURIComponent(category.name)}`}
                                    style={{
                                        fontWeight: currentCategory === category.name ? 'bold' : 'normal',
                                        color: currentCategory === category.name ? '#ff4a17' : 'inherit'
                                    }}
                                >
                                    {category.name} <span>{category.count}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CategoryWidget;