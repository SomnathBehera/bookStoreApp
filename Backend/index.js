import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"; // Importing cors
import bookRoute from "./route/book.route.js";
import userRout from "./route/user.rout.js"

dotenv.config();

const app = express(); // Initializing app

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Middleware
app.use(cors()); // Use cors middleware
app.use(express.json()); // Use express json parser middleware

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error", error);
  }
};

connectDB();

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRout);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
