import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ZoomIn } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';

const Playground = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Gallery images from playground.php (img24.jpg to img30.jpg)
    const galleryImages = [
        { id: 1, src: '/images/gallery/img24.jpg', category: 'design' },
        { id: 2, src: '/images/gallery/img25.jpg', category: 'branding photography' },
        { id: 3, src: '/images/gallery/img26.jpg', category: 'design' },
        { id: 4, src: '/images/gallery/img27.jpg', category: 'branding' },
        { id: 5, src: '/images/gallery/img28.jpg', category: 'design photography' },
        { id: 6, src: '/images/gallery/img29.jpg', category: 'photography' },
        { id: 7, src: '/images/gallery/img30.jpg', category: 'branding' },
    ];

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header Section */}
            <PageHeader
                title="Playground"
                breadcrumbs={[{ label: 'Playground' }]}
            />

            {/* Gallery Section */}
            <div className="container mx-auto px-4 py-12 -mt-16">
                <div className="mb-8">
                    {/* Portfolio Filter */}
                    <div className="flex justify-center gap-4 mb-8">
                        <button className="px-6 py-2 bg-secondary text-white rounded-full font-semibold hover:bg-primary transition-colors">
                            All
                        </button>
                        {/* Uncomment if you want to add filters
                        <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-secondary hover:text-white transition-colors">
                            Branding
                        </button>
                        <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-secondary hover:text-white transition-colors">
                            Design
                        </button>
                        <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-secondary hover:text-white transition-colors">
                            Photography
                        </button>
                        */}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image) => (
                            <div
                                key={image.id}
                                className="group relative overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer"
                                onClick={() => openLightbox(image)}
                            >
                                <img
                                    src={image.src}
                                    alt={`Playground ${image.id}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white/90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                            <ZoomIn className="text-secondary" size={32} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
                        onClick={closeLightbox}
                    >
                        &times;
                    </button>
                    <div className="max-w-5xl max-h-[90vh] relative">
                        <img
                            src={selectedImage.src}
                            alt={`Playground ${selectedImage.id}`}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Playground;
