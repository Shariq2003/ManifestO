import React, { useState } from 'react';

const DecryptionForm = () => {
    const [key, setKey] = useState('');
    const [encryptedMessage, setEncryptedMessage] = useState('');
    const [decryptedMessage, setDecryptedMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/decrypt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ key, encryptedMessage }),
            });

            const data = await response.json();
            if (response.ok) {
                setDecryptedMessage(data.decryptedMessage);
                setError('');
            } else {
                setError(data.error || 'Something went wrong');
            }
        } catch (err) {
            setError('Error decrypting message');
        }
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
            {decryptedMessage && (
                <div className="mt-4 bg-yellow-100 p-4 rounded-md">
                    <h4 className="font-semibold">Decrypted Message</h4>
                    <p>{decryptedMessage}</p>
                </div>
            )}
            {error && <div className="mt-4 text-red-500">{error}</div>}
        </div>
    );
};

export default DecryptionForm;
