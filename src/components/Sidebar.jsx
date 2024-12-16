import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
            <h2 className="text-2xl font-bold p-4 border-b border-gray-700">ManifestO</h2>
            <button
                onClick={() => setActiveTab('encryption')}
                className={`p-4 text-left hover:bg-gray-700 ${activeTab === 'encryption' ? 'bg-gray-700' : ''
                    }`}
            >
                🔐 Encryption
            </button>
            <button
                onClick={() => setActiveTab('decryption')}
                className={`p-4 text-left hover:bg-gray-700 ${activeTab === 'decryption' ? 'bg-gray-700' : ''
                    }`}
            >
                🔓 Decryption
            </button>
        </div>
    );
};

export default Sidebar;
