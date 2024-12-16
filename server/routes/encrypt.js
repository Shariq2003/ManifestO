const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitors');
const { calculateKey, encodeMessage } = require('../utils/encryption');

router.post('/', async (req, res, next) => {
    const { sender, msg } = req.body;

    if (!sender || !msg) {
        return res.status(400).json({ error: 'Sender and message are required' });
    }

    try {
        const key = calculateKey(sender);
        const encodedMessage = encodeMessage(msg, key);
        const currentDatetime = new Date();

        await Visitor.create({
            sender,
            msg: msg,
            date: currentDatetime.toISOString(),
            algo: 'encryption',
        });

        res.json({ encodedMessage, key });
    } catch (error) {
        console.error('Encryption error:', error.message);
        next(error);
    }
});

module.exports = router;
