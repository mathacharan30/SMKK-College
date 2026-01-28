import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import newsData from '../data/newsData';

const NewsDetail = () => {
    const { id } = useParams();
    const newsItem = newsData.find(n => n.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!newsItem) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">News Not Found</h2>
                    <Link to="/news" className="text-primary hover:underline">Back to News</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <div className="bg-primary/90 h-[300px] relative">
                <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="w-full h-full object-cover mix-blend-overlay opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl font-heading font-bold text-white px-4 text-center max-w-4xl leading-tight">
                        {newsItem.title}
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-20 relative z-10">
                <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                    <Link to="/news" className="inline-flex items-center text-gray-500 hover:text-primary mb-6 transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to News
                    </Link>

                    <div className="flex items-center text-gray-500 mb-8 border-b pb-4">
                        <Calendar size={20} className="mr-2 text-secondary" />
                        <span className="font-semibold">{`${newsItem.date.day} ${newsItem.date.month} ${newsItem.date.year}`}</span>
                    </div>

                    <div className="prose max-w-none text-gray-700 leading-relaxed text-lg">
                        <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
                    </div>

                    <div className="mt-12 pt-8 border-t">
                        <h4 className="font-bold text-gray-800 mb-4">Share this post</h4>
                        {/* Social Share buttons placeholders */}
                        <div className="flex space-x-2">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">Facebook</button>
                            <button className="bg-sky-500 text-white px-4 py-2 rounded text-sm">Twitter</button>
                            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">WhatsApp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
