import React, { useState } from 'react';

const Form = ({ title, namePlaceholder, inputPlaceholder, actionType }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [resultMessage, setResultMessage] = useState('');
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
                setResultMessage(data.processedMessage || data.encryptedMessage || data.decryptedMessage);
                setError('');
            } else {
                setError(data.error || 'Something went wrong');
            }
        } catch (err) {
            setError(`Error processing ${actionType}`);
        }
    };


    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
                {actionType === 'encryption' ? '🔒' : '🔓'} {title}
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
            {resultMessage && (
                <div className="mt-4 bg-green-100 p-4 rounded-md">
                    <h4 className="font-semibold">Result</h4>
                    <p>{resultMessage}</p>
                </div>
            )}
            {error && <div className="mt-4 text-red-500">{error}</div>}
        </div>
    );
};

export default Form;
