import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

const Form = ({ title, namePlaceholder, inputPlaceholder, actionType }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [resultMessage, setResultMessage] = useState('');
    const [resultKey, setResultKey] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const baseUrl = process.env.REACT_APP_API_BASE_URL;
            const response = await fetch(`${baseUrl}/api/${actionType}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sender: name, msg: message }),
            });


            const data = await response.json();
            if (response.ok) {
                setResultMessage(data.decodedMessage || data.encodedMessage || "");
                if (actionType === "encrypt") {
                    setResultKey(data.key || "");
                }
                setError('');
            } else {
                setError(data.error || 'Something went wrong');
            }
        } catch (err) {
            setError(`Error processing ${actionType}`);
        }
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard!');
        }).catch(() => {
            alert('Failed to copy!');
        });
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md text-left">
            <h3 className="text-xl font-semibold mb-4">
                {actionType === 'encrypt' ? '🔒' : '🔓'} {title}
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder={namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 border rounded-md"
                    aria-label="Enter your name"
                    required
                />
                <textarea
                    placeholder={inputPlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="p-2 border rounded-md"
                    rows="4"
                    aria-label="Enter the message"
                    required
                ></textarea>
                <button type="submit" className="bg-blue-600 text-white py-2 rounded-md">
                    Submit
                </button>
            </form>
            <div className="mt-6 space-y-4">
                {resultMessage && (
                    <div className="bg-gray-100 p-4 rounded-md">
                        <h4 className="font-semibold mb-2">{actionType === "encrypt" ? "Encrypted Message" : "Decrypted Message"}</h4>
                        <div className="relative group">
                            <pre className="bg-gray-200 p-2 rounded overflow-x-auto">
                                <code>{resultMessage}</code>
                            </pre>
                            <button
                                onClick={() => handleCopy(resultMessage)}
                                className="absolute top-2 right-2 opacity-100 bg-gray-300 hover:bg-gray-400 text-gray-800 p-1 rounded"
                                aria-label="Copy Encrypted Message"
                            >
                                <FaCopy />
                            </button>
                        </div>
                    </div>
                )}
                {actionType === "encrypt" && resultKey && (
                    <div className="bg-gray-100 p-4 rounded-md">
                        <h4 className="font-semibold mb-2">Encryption Key</h4>
                        <div className="relative group">
                            <pre className="bg-gray-200 p-2 rounded overflow-x-auto">
                                <code>{resultKey}</code>
                            </pre>
                            <button
                                onClick={() => handleCopy(resultKey)}
                                className="absolute top-2 right-2 opacity-100 bg-gray-300 hover:bg-gray-400 text-gray-800 p-1 rounded"
                                aria-label="Copy Encryption Key"
                            >
                                <FaCopy />
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {error && <div className="mt-4 text-red-500">{error}</div>}
        </div>
    );
};

export default Form;
