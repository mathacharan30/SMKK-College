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
                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Playground;
