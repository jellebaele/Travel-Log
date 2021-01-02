const { Router } = require('express');
const { mongoose, Schema } = require('mongoose');

const LogEntry = require('../models/LogEntry');

const router = Router()

router.get('/', (req, res) => {
    res.json({
        message: "Hello world logs!",
    });
});

router.post('/', async (req, res, next) => {
    try {
        const logEntry = new LogEntry(req.body);
        //console.log(logEntry)
        const createdEntry =  await logEntry.save();
        //console.log(req.body);
        res.json(createdEntry);

        //const MyModel = mongoose.model('Test', new Schema ({name: String}));
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(422);
        }
        next(error);
    }
    
    
})

module.exports = router;