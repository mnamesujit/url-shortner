const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
    sortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
    },
    { timestamps: true }
)

const urlModel = mongoose.model('url',urlSchema)

module.exports = urlModel