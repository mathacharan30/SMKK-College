import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pagesData } from '../data/pagesData';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ClientsSlider from '../components/home/ClientsSlider';
import PageHeader from '../components/ui/PageHeader';

const GenericPage = () => {
    const { pageId } = useParams();
    const data = pagesData[pageId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pageId]);

    // Check if this is a PDF file request
    useEffect(() => {
        if (pageId && pageId.toLowerCase().endsWith('.pdf')) {
            // Redirect to the actual PDF file
            window.location.href = `/${pageId}`;
        }
    }, [pageId]);

    if (!data) {
        // If it's a PDF, the redirect will happen, so show loading
        if (pageId && pageId.toLowerCase().endsWith('.pdf')) {
            return (
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Loading Document...</h2>
                        <p>If the document doesn't load automatically, <a href={`/${pageId}`} className="text-blue-600 underline">click here</a>.</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
                    <p>The requested page "{pageId}" could not be found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <PageHeader
                title={data.title}
                breadcrumbs={[{ label: data.title }]}
            />

            <div className="container mx-auto px-4 py-12 -mt-16">
                <motion.div
                    className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {data.sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            className="mb-10 last:mb-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            {section.title && (
                                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 pb-3 border-b-2 border-secondary/30 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                                    {section.title}
                                </h3>
                            )}

                            {section.type === 'text' && (
                                <div
                                    className="prose max-w-none text-gray-600 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                            )}

                            {section.type === 'table' && (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200 border">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                {section.headers.map((header, hIdx) => (
                                                    <th key={hIdx} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                                        {header}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {section.rows.map((row, rIdx) => (
                                                <tr key={rIdx}>
                                                    {row.map((cell, cIdx) => (
                                                        <td key={cIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            {cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {section.type === 'images' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    {section.images.map((img, iIdx) => (
                                        <div key={iIdx} className="rounded overflow-hidden shadow">
                                            <img src={img} alt={`${data.title} ${iIdx + 1}`} className="w-full h-auto object-cover" />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {section.type === 'profile' && (
                                <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-lg">
                                    <div className="w-48 h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                        <img src={section.image} alt={section.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h4 className="text-2xl font-bold text-primary mb-1">{section.name}</h4>
                                        <h5 className="text-lg text-secondary font-medium mb-4">{section.role}</h5>
                                        <div
                                            className="prose text-gray-600"
                                            dangerouslySetInnerHTML={{ __html: section.content }}
                                        />
                                    </div>
                                </div>
                            )}

                            {section.type === 'clients-slider' && (
                                <ClientsSlider />
                            )}

                            {section.type === 'document-grid' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {section.items.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex items-start gap-4"
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 text-secondary p-4 rounded-xl group-hover:scale-110 transition-transform">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 0 0 0 2-2V7Z" /><path d="M14 2v4h4" /></svg>
                                            </div>
                                            <div className="flex-1">
                                                <h5 className="font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">{item.title}</h5>
                                                {item.link ? (
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-secondary text-sm font-semibold hover:underline flex items-center gap-1 group-hover:gap-2 transition-all"
                                                    >
                                                        View Document
                                                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                                    </a>
                                                ) : (
                                                    <span className="text-gray-400 text-sm">Coming Soon</span>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default GenericPage;
