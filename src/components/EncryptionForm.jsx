import React, { useState } from 'react';

const EncryptionForm = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [encryptedMessage, setEncryptedMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/encrypt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, message }),
            });

            const data = await response.json();
            if (response.ok) {
                setEncryptedMessage(data.encryptedMessage); // assuming response contains 'encryptedMessage'
                setError('');
            } else {
                setError(data.error || 'Something went wrong');
            }
        } catch (err) {
            setError('Error encrypting message');
        }
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
            {encryptedMessage && (
                <div className="mt-4 bg-green-100 p-4 rounded-md">
                    <h4 className="font-semibold">Encrypted Message</h4>
                    <p>{encryptedMessage}</p>
                </div>
            )}
            {error && <div className="mt-4 text-red-500">{error}</div>}
        </div>
    );
};

export default EncryptionForm;
