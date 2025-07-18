import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// 🔽 this must match exactly
app.use('/api/auth', authRoutes);

export default app;
