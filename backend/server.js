import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';


dotenv.config();

const app = express();
app.use(cors({
  origin: '*', // or replace '*' with your frontend Vercel domain
  credentials: true,
}));
app.use(express.json());

app.use('/api/auth', authRoutes);


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000, () => {
        console.log('Server running on port', process.env.PORT || 5000);
    });
}).catch(err => console.error(err));
