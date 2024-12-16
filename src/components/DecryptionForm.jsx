import React, { useState } from 'react';

const DecryptionForm = ({ onDecrypt }) => {
    const [key, setKey] = useState('');
    const [encryptedMessage, setEncryptedMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onDecrypt(key, encryptedMessage);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">🔓 Decrypt Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Enter Decryption Key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    className="p-2 border rounded-md"
                    required
                />
                <textarea
                    placeholder="Enter Encrypted Message"
                    value={encryptedMessage}
                    onChange={(e) => setEncryptedMessage(e.target.value)}
                    className="p-2 border rounded-md"
                    rows="4"
                    required
                ></textarea>
                <button type="submit" className="bg-green-600 text-white py-2 rounded-md">
                    Decrypt
                </button>
            </form>
        </div>
    );
};

export default DecryptionForm;
