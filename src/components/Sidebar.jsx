import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiLockClosed, HiLockOpen, HiHome, HiMenu, HiX } from 'react-icons/hi';

const Sidebar = ({ activeTab, setActiveTab }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const hamburgerBtnRef = useRef(null);

    const toggleSidebar = (e) => {
        e.stopPropagation();
        setIsSidebarOpen(prevState => !prevState);
    };

    const closeSidebar = (e) => {
        if (
            sidebarRef.current &&
            !sidebarRef.current.contains(e.target) &&
            hamburgerBtnRef.current &&
            !hamburgerBtnRef.current.contains(e.target) &&
            isSidebarOpen
        ) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener('click', closeSidebar);
        return () => {
            document.body.removeEventListener('click', closeSidebar);
        };
    }, [isSidebarOpen]);

    return (
        <div className="bg-white h-screen">
            <div className="md:hidden p-4">
                <button
                    ref={hamburgerBtnRef}
                    onClick={toggleSidebar}
                    className="hamburger-btn"
                >
                    {isSidebarOpen ? (
                        <HiX className="w-6 h-6 text-black" />
                    ) : (
                        <HiMenu className="w-6 h-6 text-black" />
                    )}
                </button>
            </div>

            <div
                ref={sidebarRef}
                className={`sidebar w-64 h-screen bg-gray-800 text-white flex flex-col shadow-lg overflow-hidden fixed top-0 left-0 z-50 md:w-48 md:relative transition-all duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
            >
                <h2 className="text-2xl font-bold p-4 border-b border-gray-700 text-center bg-gray-900">
                    ManifestO
                </h2>
                <Link
                    to="/"
                    onClick={() => {
                        setActiveTab('welcome')
                        setIsSidebarOpen(false);
                    }}
                    className={`m-2 flex items-center p-4 text-left hover:bg-gray-700 transition-all duration-200 rounded-l-md ${activeTab === 'welcome' ? 'bg-gray-700 text-white font-semibold' : 'text-gray-400'}`}
                >
                    <HiHome className="w-5 h-5 mr-3" />
                    Home
                </Link>

                <Link
                    to="/encryption"
                    onClick={() => {
                        setActiveTab('encryption')
                        setIsSidebarOpen(false);
                    }}
                    className={`m-2 flex items-center p-4 text-left hover:bg-gray-700 transition-all duration-200 rounded-l-md ${activeTab === 'encryption' ? 'bg-gray-700 text-white font-semibold' : 'text-gray-400'}`}
                >
                    <HiLockClosed className="w-5 h-5 mr-3" />
                    Encryption
                </Link>

                <Link
                    to="/decryption"
                    onClick={() => {
                        setActiveTab('decryption')
                        setIsSidebarOpen(false);
                        }}
                    className={`m-2 flex items-center p-4 text-left hover:bg-gray-700 transition-all duration-200 rounded-l-md ${activeTab === 'decryption' ? 'bg-gray-700 text-white font-semibold' : 'text-gray-400'}`}
                >
                    <HiLockOpen className="w-5 h-5 mr-3" />
                    Decryption
                </Link>

                <Link
                    to="/"
                    onClick={() => {
                        setActiveTab('welcome')
                        setIsSidebarOpen(false);
                        }}
                    className={`m-2 flex items-center text-center p-4 hover:bg-gray-700 transition-all duration-200 rounded-l-md ${activeTab === 'stamp' ? 'bg-gray-700 text-white font-semibold' : 'text-gray-400'}`}
                >
                    <p className="mb-2 text-center">
                        <span className="font-bold">❤️ By{' '} Shariq ❤️</span>
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
