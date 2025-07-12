import express from 'express';
import Hotel from '../models/Hotel.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const hotel = new Hotel(req.body);
        await hotel.save();
        res.status(201).json(hotel);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});


router.get('/', async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
});

router.get('/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if(!hotel) return res.status(400).json({message: 'Not found'});
        res.json(hotel);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.json({message: 'Hotel deleted'});
    } catch (err) {
        res.status(500).json({error: err.message})
    }
});

export default router;