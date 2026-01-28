import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            {/* Add padding-top to account for fixed navbar - increased to prevent overlap */}
            <main className="flex-grow pt-[160px] md:pt-[140px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
