const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitors');
const { calculateKey, encodeMessage } = require('../utils/encryption');

// Encryption route
router.post('/encrypt', async (req, res) => {
    const { sender, msg } = req.body;

    if (!sender || !msg) {
        return res.status(400).json({ error: 'Sender and message are required' });
    }

    try {
        const key = calculateKey(sender);
        const encodedMessage = encodeMessage(msg, key);

        const visitor = new Visitor({
            sender,
            msg: encodedMessage,
            algo: 'encryption'
        });
        await visitor.save();

        res.json({ encodedMessage, key });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Encryption failed' });
    }
});

module.exports = router;