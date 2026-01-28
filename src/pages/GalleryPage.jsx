import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '../data/galleryData';
import PageHeader from '../components/ui/PageHeader';

const GalleryPage = ({ type = 'photo' }) => {

    const displayImages = type === 'photo'
        ? galleryImages.filter(src => !src.includes('gallery-sm'))
        : [];

    const items = displayImages.map((src, i) => ({
        id: i,
        src: src,
        title: `Photo ${i + 1}`,
        type: type
    }));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [type]);

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <PageHeader
                title={type === 'photo' ? 'Photo Gallery' : 'Video Gallery'}
                breadcrumbs={[{ label: type === 'photo' ? 'Photos' : 'Videos' }]}
            />

            <div className="container mx-auto px-4 py-16 -mt-16">
                {type === 'video' ? (
                    <div className="flex justify-center">
                        <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl relative">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/v-lZxRkxmjE?si=GH4r0l0brurvlLto"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {items.map((item) => (
                            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg aspect-square">
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                    <span className="text-white font-bold border border-white px-4 py-2 rounded">View</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GalleryPage;
