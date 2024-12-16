import React, { useState } from 'react';

const EncryptionForm = ({ onEncrypt }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onEncrypt(name, message);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">🔐 Encrypt Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Enter Sender's Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 border rounded-md"
                    required
                />
                <textarea
                    placeholder="Enter Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="p-2 border rounded-md"
                    rows="4"
                    required
                ></textarea>
                <button type="submit" className="bg-blue-600 text-white py-2 rounded-md">
                    Encrypt
                </button>
            </form>
        </div>
    );
};

export default EncryptionForm;
