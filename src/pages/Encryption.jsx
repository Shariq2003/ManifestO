import React from 'react';
// import EncryptionForm from '../components/EncryptionForm';
import Form from '../components/Form';

const Encryption = () => {
    return (
        <div className="text-center my-6">
            <h1 className="text-4xl font-bold text-gray-800">🔒 Encrypt Your Messages</h1>
            <Form
                title="Encryption"
                namePlaceholder="Enter the paired name (sender-reciever, e.g., Alice-Bob)"
                inputPlaceholder="Enter the message to encrypt"
                actionType="encrypt"
            />
        </div>
    );
};

export default Encryption;
