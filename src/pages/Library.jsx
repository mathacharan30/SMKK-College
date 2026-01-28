import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import ClientsSlider from '../components/home/ClientsSlider';
import PageHeader from '../components/ui/PageHeader';

const Library = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header Section */}
            <PageHeader
                title="Library"
                breadcrumbs={[{ label: 'Library' }]}
            />

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 -mt-16">
                <motion.div
                    className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    {/* About Library Section */}
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-secondary pb-3">
                            About Library
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            Our library is a curate collection of sources of information and similar resources,
                            selected by experts and made accessible to a defined community for reference or borrowing.
                            It provides physical or digital access to material, and may be a physical location or a
                            virtual space, or both. Our Library collection includes books, periodicals, newspapers,
                            manuscripts, films, maps, prints, documents and many other.
                        </p>
                    </div>

                    {/* Library Information Section */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
                            Library Information
                        </h3>

                        {/* Part A: Number of Books */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6 border-l-4 border-secondary">
                            <h3 className="text-xl font-bold text-secondary mb-2">
                                Part A: Number of books available in the Library
                            </h3>
                            <p className="text-3xl font-bold text-primary">6,567 Books</p>
                        </div>

                        {/* Part B: Journals */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
                                <span className="bg-secondary text-white px-3 py-1 rounded-md mr-3">Part B</span>
                                Journals
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Journals of Indian Education",
                                    "Indian Journal of Psychological Counselling",
                                    "Indian Educational Review",
                                    "Edu Tracks",
                                    "Resonance – Journal of Science Education",
                                    "Viveka Prabha",
                                    "NCTE Journal",
                                    "Journal of Community Guidance and Research",
                                    "Guidance and Research"
                                ].map((journal, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                                    >
                                        <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                                            {index + 1}
                                        </span>
                                        <h4 className="text-gray-700 font-medium">{journal}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Part C: Periodicals */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
                                <span className="bg-secondary text-white px-3 py-1 rounded-md mr-3">Part C</span>
                                Periodicals
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Competition success review",
                                    "The Week",
                                    "Spardha Spoorthi",
                                    "Spardha Vijetha"
                                ].map((periodical, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                                    >
                                        <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                                            {index + 1}
                                        </span>
                                        <h4 className="text-gray-700 font-medium">{periodical}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Library Image */}
                    <div className="mb-10">
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="/images/college/library.jpg"
                                alt="Library"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Clients Slider Section */}
            <div className="bg-primary py-10">
                <div className="container mx-auto px-4">
                    <ClientsSlider />
                </div>
            </div>
        </div>
    );
};

export default Library;
