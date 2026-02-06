import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogData from '../../assets/jsonData/blog/BlogData.json';

interface BlogType {
    id: number;
    title: string;
    text: string;
    date: string;
    tag: string;
}

const SearchWidget = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<BlogType[]>([]);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Search functionality with partial match
    useEffect(() => {
        if (searchTerm.trim().length >= 2) {
            const results = BlogData.filter((blog) => {
                const searchLower = searchTerm.toLowerCase();
                const titleMatch = blog.title.toLowerCase().includes(searchLower);
                const textMatch = blog.text.toLowerCase().includes(searchLower);
                const tagMatch = blog.tag.toLowerCase().includes(searchLower);
                
                return titleMatch || textMatch || tagMatch;
            });
            
            setSearchResults(results);
            setShowResults(true);
        } else {
            setSearchResults([]);
            setShowResults(false);
        }
    }, [searchTerm]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchResults.length > 0) {
            navigate(`/blog-single-with-sidebar/${searchResults[0].id}`);
            setSearchTerm('');
            setShowResults(false);
        }
    };

    const handleResultClick = (blogId: number) => {
        navigate(`/blog-single-with-sidebar/${blogId}`);
        setSearchTerm('');
        setShowResults(false);
    };

    const highlightMatch = (text: string, search: string) => {
        if (!search.trim()) return text;
        
        const regex = new RegExp(`(${search})`, 'gi');
        const parts = text.split(regex);
        
        return parts.map((part, index) => 
            regex.test(part) ? <strong key={index} style={{color: '#ff4a17'}}>{part}</strong> : part
        );
    };

    return (
        <>
            <div className="sidebar-item search" ref={searchRef} style={{position: 'relative'}}>
                <div className="sidebar-info">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Açar söz daxil edin" 
                            name="text" 
                            className="form-control" 
                            autoComplete='off'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                    
                    {/* Search Results Dropdown */}
                    {showResults && searchResults.length > 0 && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: '#fff',
                            border: '1px solid #e5e5e5',
                            borderRadius: '4px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            maxHeight: '400px',
                            overflowY: 'auto',
                            zIndex: 1000,
                            marginTop: '5px'
                        }}>
                            <div style={{padding: '10px 15px', borderBottom: '1px solid #e5e5e5', fontSize: '12px', color: '#666'}}>
                                {searchResults.length} nəticə tapıldı
                            </div>
                            {searchResults.map((blog) => (
                                <div 
                                    key={blog.id}
                                    onClick={() => handleResultClick(blog.id)}
                                    style={{
                                        padding: '12px 15px',
                                        borderBottom: '1px solid #f0f0f0',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f8f8'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                                >
                                    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '5px', color: '#232323'}}>
                                        {highlightMatch(blog.title, searchTerm)}
                                    </div>
                                    <div style={{fontSize: '12px', color: '#666', marginBottom: '5px'}}>
                                        {highlightMatch(blog.text.substring(0, 100) + '...', searchTerm)}
                                    </div>
                                    <div style={{fontSize: '11px', color: '#999'}}>
                                        <span style={{
                                            display: 'inline-block',
                                            backgroundColor: '#f0f0f0',
                                            padding: '2px 8px',
                                            borderRadius: '3px',
                                            marginRight: '8px'
                                        }}>
                                            {blog.tag}
                                        </span>
                                        {blog.date}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {/* No Results Message */}
                    {showResults && searchResults.length === 0 && searchTerm.trim().length >= 2 && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: '#fff',
                            border: '1px solid #e5e5e5',
                            borderRadius: '4px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            zIndex: 1000,
                            marginTop: '5px',
                            padding: '20px',
                            textAlign: 'center',
                            color: '#999'
                        }}>
                            Heç bir nəticə tapılmadı
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SearchWidget;
