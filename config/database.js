import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const Database = () => {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database Connected");
  });
};
