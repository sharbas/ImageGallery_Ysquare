import express from "express";
const app = express();
import connectDB from "./config/db.js";
import galleryRoute from "./Route/galleryRoute.js";
import cors from 'cors';

const connect = async () => {
    await connectDB();
}
connect();
app.use(express.json())
app.use(express.static('backend/public'))
app.use("/images",express.static("public/images"));

// Update CORS configuration to allow requests from http://localhost:5173
app.use(cors({
    origin: 'http://localhost:5173', // Update origin
    credentials: true
}));

app.use(galleryRoute);

let Port = 3000;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
