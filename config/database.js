import mongoose from "mongoose";

export const Database = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/crud-project").then(() => {
    console.log("Database Connected");
  });
};
