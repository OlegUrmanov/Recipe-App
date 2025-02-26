const { Router } = require('express');

const LogEntry = require('../models/LogEntry')

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const entries = await LogEntry.find();
        res.json(entries);    
    } catch (error) {
        next(error);
    }
    
});

router.post('/', async (req, res, next) => {
    try {
        const logEntry = new LogEntry(req.body);   
        const createdEntry = await logEntry.save();
        res.json(createdEntry);
    } catch (error) {
        next(error);
    }
});

router.delete('/:_id', async (req, res) => {
    const message = await LogEntry
     .findByIdAndRemove(req.body._id)
     .then(() => 'LogEntry deleted');
   
    res.json({ message });
   });

module.exports = router;