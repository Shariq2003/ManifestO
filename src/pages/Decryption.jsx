import React from 'react';
// import DecryptionForm from '../components/DecryptionForm';
import Form from "../components/Form";

const Decryption = () => {

    return (
        <div className="text-center my-6">
            <h1 className="text-4xl font-bold text-gray-800">🔓 Decrypt Your Messages</h1>
            <Form
                title="Decryption"
                namePlaceholder="Enter the key shared with you"
                inputPlaceholder="Enter the message to decrypt"
                actionType="decrypt"
            />
        </div>
    );
};

export default Decryption;
