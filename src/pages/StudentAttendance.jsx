import React from 'react';

const StudentAttendance = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <div className="bg-primary py-20 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Student Attendance</h1>
                    <p className="text-gray-200">View attendance records</p>
                </div>
            </div>

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
