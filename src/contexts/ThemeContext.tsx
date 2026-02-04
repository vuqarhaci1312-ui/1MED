import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface ThemeContextType {
    theme: 'dark' | 'light';
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Route mapping for proper light/dark switching
const getRouteVariant = (path: string, targetTheme: 'light' | 'dark'): string => {
    // Remove trailing slashes
    const cleanPath = path.replace(/\/$/, '');
    
    // Check if switching to light
    if (targetTheme === 'light') {
        // Home page special case
        if (cleanPath === '' || cleanPath === '/') {
            return '/home-1-light';
        }
        
        // Already on light version
        if (cleanPath.includes('-light')) {
            return cleanPath;
        }
        
        // Routes with parameters (ID routes)
        if (cleanPath.match(/\/(team-details|project-details|service-details|blog-single|blog-single-with-sidebar)\/\d+$/)) {
            return cleanPath.replace(
                /\/(team-details|project-details|service-details|blog-single|blog-single-with-sidebar)(\/\d+)$/,
                '/$1-light$2'
            );
        }
        
        // Regular routes - just append -light
        return cleanPath + '-light';
    } 
    
    // Switching to dark
    else {
        // Home page special case
        if (cleanPath === '/home-1-light') {
            return '/';
        }
        
        // Not on light version
        if (!cleanPath.includes('-light')) {
            return cleanPath;
        }
        
        // Routes with parameters (ID routes)
        if (cleanPath.match(/\/(team-details|project-details|service-details|blog-single|blog-single-with-sidebar)-light\/\d+$/)) {
            return cleanPath.replace(
                /\/(team-details|project-details|service-details|blog-single|blog-single-with-sidebar)-light(\/\d+)$/,
                '/$1$2'
            );
        }
        
        // Regular routes - remove -light
        return cleanPath.replace('-light', '');
    }
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        const savedTheme = localStorage.getItem('dixor-theme');
        return (savedTheme as 'dark' | 'light') || 'dark';
    });

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        localStorage.setItem('dixor-theme', theme);
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    // Sync route with theme on mount and navigation
    useEffect(() => {
        const currentPath = location.pathname;
        const expectedRoute = getRouteVariant(currentPath, theme);
        
        // Preserve query parameters (like category filter)
        const searchParams = location.search;
        
        // Only navigate if we're on the wrong variant
        if (expectedRoute !== currentPath) {
            navigate(expectedRoute + searchParams, { replace: true });
        }
    }, [location.pathname, theme, navigate]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        
        // Add transition class BEFORE state change
        document.body.classList.add('theme-transitioning');
        
        // Get the target route
        const currentPath = location.pathname;
        const targetRoute = getRouteVariant(currentPath, newTheme);
        
        // Preserve query parameters (like category filter)
        const searchParams = location.search;
        const fullTargetRoute = targetRoute + searchParams;
        
        // Change theme state
        setTheme(newTheme);
        
        // Navigate only if route actually changes
        if (fullTargetRoute !== currentPath + searchParams) {
            navigate(fullTargetRoute, { replace: true });
        }
        
        // Remove transition class after animation
        setTimeout(() => {
            document.body.classList.remove('theme-transitioning');
        }, 200);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
