import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { teachingStaff, nonTeachingStaff } from '../data/staffData';
import PageHeader from '../components/ui/PageHeader';

const StaffPage = ({ type = 'teaching' }) => {
    const staff = type === 'teaching' ? teachingStaff : nonTeachingStaff;
    const title = type === 'teaching' ? 'Teaching Faculty' : 'Non-Teaching Staff';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [type]);

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <PageHeader
                title={title}
                breadcrumbs={[{ label: type === 'teaching' ? 'Teaching Staff' : 'Non-Teaching Staff' }]}
            />

            <div className="container mx-auto px-4 py-16 -mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {staff.map((person, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow text-center group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            {/* MUCH BIGGER IMAGE */}
                            <div className="relative h-[28rem] overflow-hidden bg-gray-200">
                                {person.image ? (
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        No Image
                                    </div>
                                )}

                                {(person.email || person.phone) && (
                                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                        {person.email && (
                                            <a
                                                href={`mailto:${person.email}`}
                                                className="p-3 bg-white rounded-full text-primary hover:text-secondary transition-colors"
                                            >
                                                <Mail size={22} />
                                            </a>
                                        )}
                                        {person.phone && (
                                            <a
                                                href={`tel:${person.phone}`}
                                                className="p-3 bg-white rounded-full text-primary hover:text-secondary transition-colors"
                                            >
                                                <Phone size={22} />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-1">
                                    {person.name}
                                </h3>
                                <p className="text-secondary font-medium text-sm uppercase">
                                    {person.designation}
                                </p>

                                <div className="mt-3 text-sm text-gray-600 space-y-1">
                                    {person.qualification && (
                                        <p><strong>Qualification:</strong> {person.qualification}</p>
                                    )}
                                    {person.payScale && (
                                        <p><strong>Pay Scale:</strong> {person.payScale}</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StaffPage;
