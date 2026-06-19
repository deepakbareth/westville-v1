import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // If you want smooth scrolling:
        window.scrollTo({
            top: 0,
            left: 0,
            // behavior: 'smooth' // or 'instant'
        });
    }, [pathname]);
    // Fires every time the URL path changes

    return null; // This component doesn't render any UI
};

export default ScrollToTop;
