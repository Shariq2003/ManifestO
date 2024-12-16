const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitors');
const { calculateKey, decodeMessage } = require('../utils/encryption');

// Decryption route
router.post('/decrypt', async (req, res) => {
    const { sender, msg } = req.body;

    if (!sender || !msg) {
        return res.status(400).json({ error: 'Sender (key) and message are required' });
    }

    try {
        const key = calculateKey(sender);
        const decodedMessage = decodeMessage(msg, key);

        const visitor = new Visitor({
            sender,
            msg: decodedMessage,
            algo: 'decryption'
        });
        await visitor.save();

        res.json({ decodedMessage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Decryption failed' });
    }
});

module.exports = router;
