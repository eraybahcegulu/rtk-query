import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbUrl: string = process.env.MONGODB_URI || '';

const connectDB = async () => {
    mongoose.connect(dbUrl);
    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    });
    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error', err);
    });
}

export default connectDB;