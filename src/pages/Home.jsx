import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import EncryptionForm from '../components/EncryptionForm';
import DecryptionForm from '../components/DecryptionForm';
import Footer from '../components/Footer';

const Home = () => {
    const [activeTab, setActiveTab] = useState('welcome');

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1">
                <Sidebar setActiveTab={setActiveTab} />
                <div className="flex flex-col w-full bg-gray-100">
                    <div className="mt-auto">
                        {activeTab === 'welcome' && (
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to ManifestO 🔐</h1>
                                <p className="text-lg text-gray-600">
                                    Choose an option from the sidebar to get started with encryption or decryption.
                                </p>
                            </div>
                        )}
                        {activeTab === 'encryption' && <EncryptionForm />}
                        {activeTab === 'decryption' && <DecryptionForm />}
                    </div>
                    <div className="mt-auto">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
