import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 left-0 bg-primary text-white p-2 text-center min-w-[60px]">
                    <span className="block text-xl font-bold font-heading">{news.date.day}</span>
                    <span className="block text-xs uppercase">{news.date.month}</span>
                </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold font-heading mb-3 text-gray-800 hover:text-primary transition-colors line-clamp-2">
                    <Link to={`/news/${news.id}`}>{news.title}</Link>
                </h3>

                <p className="text-gray-600 mb-4 text-sm line-clamp-3 flex-grow">
                    {news.content.substring(0, 100)}...
                </p>

                <Link
                    to={`/news/${news.id}`}
                    className="text-secondary font-semibold text-sm hover:underline mt-auto inline-flex items-center"
                >
                    Read more &rarr;
                </Link>
            </div>
        </article>
    );
};

export default NewsCard;
