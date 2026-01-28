import React from 'react';
import PageHeader from '../components/ui/PageHeader';

const StudentAttendance = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <PageHeader
                title="Student Attendance"
                breadcrumbs={[{ label: 'Attendance' }]}
            />

            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold mb-8">Students List - 2020 to 2023</h2>
                <div className="flex justify-center">
                    <a
                        href="/Student_attendance 2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                    >
                        <img src="/images/attendance1.png" alt="Attendance List" className="max-w-full h-auto shadow-lg rounded" />
                        <p className="mt-4 text-primary font-bold underline">Click to view Name List</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StudentAttendance;
