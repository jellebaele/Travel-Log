const mongoose = require ('mongoose');
const { Schema } = mongoose;

//'https://mongoosejs.com/docs/guide.html'

const requiredNumber = {
    type: Number,
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
    latitude: {
        ...requiredNumber,
        min: -90,
        max: 90
    },
    longitude: {
        ...requiredNumber,
        min: -180,
        max: 180,
    },
    visitDate: { 
        type: Date, 
        default: Date.now,
        required: true
    },
},
    { timestamps: true, 
});

// To use our schema definition, we need to convert our blogSchema into a Model we can work with. 
// To do so, we pass it into mongoose.model(modelName, schema):
const logEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = logEntry;