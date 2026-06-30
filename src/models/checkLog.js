const mongoose = require("mongoose");

const checkLogSchema = new mongoose.Schema({
    passId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pass",
        required: true
    },
    eventType: {
        type: String,
        enum: ['checked_in', 'checked_out'],
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const CheckLog = mongoose.model("CheckLog", checkLogSchema);

module.exports = CheckLog;