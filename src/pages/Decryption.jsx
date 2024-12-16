// import DecryptionForm from '../components/DecryptionForm';
import Form from "../components/Form";

const Decryption = () => {

    return (
        <Form
            title="Decryption"
            namePlaceholder="Enter the key shared with you"
            inputPlaceholder="Enter the message to decrypt"
            actionType="decrypt"
        />
    );
};

export default Decryption;
