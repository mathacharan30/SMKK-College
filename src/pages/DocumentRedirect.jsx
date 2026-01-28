import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DocumentRedirect = () => {
    const location = useLocation();

    useEffect(() => {
        // Redirect to the actual file in the public folder
        window.location.href = location.pathname;
    }, [location]);

    return (
        <div className="container mx-auto py-20 px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Loading Document...</h1>
            <p>If the document doesn't load automatically, <a href={location.pathname} className="text-blue-600 underline">click here</a>.</p>
        </div>
    );
};

export default DocumentRedirect;
