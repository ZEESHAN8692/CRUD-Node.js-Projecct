import express from "express";
const app = express();
import contactRoutes from "./routes/contact.routes.js";
import { Databse } from "./config/database.js";

//midelware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Successfull Connect Port http://localhost:${PORT}/`);
});

// routes
app.use("/", contactRoutes);

//Database
Databse();
