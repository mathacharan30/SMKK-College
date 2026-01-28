import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, FileText } from 'lucide-react';
import { naacData } from '../data/naacData';
import PageHeader from '../components/ui/PageHeader';

const ExtendedProfile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header */}
            <PageHeader
                title="NAAC - Extended Profile"
                breadcrumbs={[
                    { label: 'NAAC', href: '/naac' },
                    { label: 'Extended Profile' }
                ]}
            />

            <div className="container mx-auto px-4 py-12 -mt-16">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="md:w-1/3 order-2 md:order-1">
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-4">
                            <h4 className="text-xl font-bold border-b-2 border-primary pb-3 mb-4 text-gray-800">
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        to="/iiqa"
                                        className="block text-gray-600 hover:text-secondary transition-colors border-l-4 border-transparent hover:border-secondary pl-3 py-1"
                                    >
                                        IIQA
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/annexures"
                                        className="block text-gray-600 hover:text-secondary transition-colors border-l-4 border-transparent hover:border-secondary pl-3 py-1"
                                    >
                                        Annexures
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/extended-profile"
                                        className="block text-secondary font-semibold border-l-4 border-secondary pl-3 py-1"
                                    >
                                        Extended Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/ssr"
                                        className="block text-gray-600 hover:text-secondary transition-colors border-l-4 border-transparent hover:border-secondary pl-3 py-1"
                                    >
                                        Self Study Report
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:w-2/3 order-1 md:order-2">
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h3 className="text-3xl font-bold text-primary mb-8 border-b-2 border-gray-200 pb-4">
                                Extended Profile
                            </h3>

                            <div className="space-y-6">
                                {naacData.extendedProfile && naacData.extendedProfile.length > 0 ? (
                                    naacData.extendedProfile.map((item, index) => (
                                        <div 
                                            key={index} 
                                            className="bg-gradient-to-r from-primary to-primary/90 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="bg-white/20 p-3 rounded-full">
                                                        <FileText className="text-white" size={24} />
                                                    </div>
                                                    <h6 className="text-white font-semibold text-lg">
                                                        {item.title}
                                                    </h6>
                                                </div>
                                                <a 
                                                    href={item.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="bg-white text-primary px-6 py-2 rounded-full font-bold text-sm hover:bg-secondary hover:text-white transition-all duration-300 flex items-center gap-2 shadow-md"
                                                >
                                                    Click Here
                                                    <ChevronRight size={16} />
                                                </a>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-12 text-gray-500">
                                        <FileText size={48} className="mx-auto mb-4 text-gray-300" />
                                        <p>No extended profile documents available at the moment.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtendedProfile;

