const mongoose = require ('moongoose');
const { Schema } = mongoose;

const requiredNumber = {
    type: Integer,
    required: true
};

const logEntrySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    body: String,
    comments: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    image: String,
    latitude: requiredNumber,
    longitude: requiredNumber,
    visitDate: { 
        type: Date, 
        default: Date.now,
        required: true
    },},
    {timestamps: true, 
});

module.exports = {
    logEntrySchema,
}