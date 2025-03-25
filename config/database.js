import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const Databse = () => {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Databse Connected");
  });
};
