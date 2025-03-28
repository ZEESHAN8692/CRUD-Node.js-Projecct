import express from "express";
import contactRoutes from "./routes/countact.routes.js";
import { Database } from "./config/database.js";
const app = express();

// server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Successfull connect port http://localhost:${3000}/`);
});

// Mildeware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routes

app.use("/", contactRoutes);

// Database
Database();
