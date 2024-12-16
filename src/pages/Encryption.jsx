import React from 'react';
// import EncryptionForm from '../components/EncryptionForm';
import Form from '../components/Form';

const Encryption = () => {
    return (
        <Form
            title="Encryption"
            namePlaceholder="Enter the paired name (sender-reciever, e.g., Alice-Bob)"
            inputPlaceholder="Enter the message to encrypt"
            actionType="encrypt"
        />
    );
};

export default Encryption;
