import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import 'dotenv/config'

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err))

// Start server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
