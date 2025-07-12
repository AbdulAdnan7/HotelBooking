import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import hotelRoutes  from './routes/hotelRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log('PORT:', process.env.PORT);
console.log('MONGO_URL:', process.env.MONGO_URL);

app.use('/api/hotels', hotelRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
        console.log(`Server running on prot ${process.env.PORT}`);
    });
})
.catch((err) => console.log(err));