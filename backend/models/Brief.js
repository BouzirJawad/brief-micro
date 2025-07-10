const mongoose = require("mongoose")

const briefSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }, 
    context: {
        type: String,
        required: true,
    },
    skillCodes: {
        type: [String],
        resuired: true
    }
})

const briefModel = mongoose.model('Brief', briefSchema)

module.exports = briefModel