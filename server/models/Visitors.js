const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    sender: { type: String, required: true },
    msg: { type: String, required: true },
    date_time: { type: Date, default: Date.now },
    algo: { type: String, enum: ['encryption', 'decryption'], required: true }
});

module.exports = mongoose.model('Visitors', visitorSchema);
