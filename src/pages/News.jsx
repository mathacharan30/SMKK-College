import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import newsData from '../data/newsData';
import NewsCard from '../components/news/NewsCard';
import PageHeader from '../components/ui/PageHeader';

const News = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeYear, setActiveYear] = useState('All');

    // Filter news based on year
    const newsList = activeYear === 'All'
        ? newsData
        : newsData.filter(item => item.date.year === activeYear);

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <PageHeader
                title="News & Events"
                breadcrumbs={[{ label: 'News' }]}
            />

            <div className="container mx-auto px-4 py-16">
                {/* Year Filter */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {['All', '2023', '2022', '2021', '2020', '2019'].map((year, index) => (
                        <motion.button
                            key={year}
                            onClick={() => setActiveYear(year)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${activeYear === year
                                ? 'bg-secondary text-white shadow-lg transform scale-105'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {year}
                        </motion.button>
                    ))}
                </motion.div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsList.length > 0 ? (
                        newsList.map((news) => (
                            <NewsCard key={news.id} news={news} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-gray-500">
                            <p>No news found for {activeYear}.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default News;
