const mongoose = require('mongoose');

const { Schema } = mongoose;

const logEntrySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    comments:   String,
    image: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0,
    },
},{
    timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema)

module.exports = LogEntry;