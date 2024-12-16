const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitors');
const { calculateName, decodeMessage } = require('../utils/decryption');


router.post('/', async (req, res, next) => {
    const { sender, msg } = req.body;

    if (!sender || !msg) {
        return res.status(400).json({ error: 'Sender (key) and message are required' });
    }

    try {
        const key = sender;
        const decodedMessage = decodeMessage(msg, key);
        const currentDatetime = new Date();
        const senderName = calculateName(key);

        await Visitor.create({
            sender: senderName,
            msg: decodedMessage,
            date: currentDatetime.toISOString(),
            algo: 'decryption',
        });

        res.json({ decodedMessage });
    } catch (error) {
        console.error('Decryption error:', error.message);
        next(error);
    }
});

module.exports = router;
