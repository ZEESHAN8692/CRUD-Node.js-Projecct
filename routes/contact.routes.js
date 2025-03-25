import express from "express";
const router = express.Router();
import { getContact } from "../controller/contacts.controller.js";

router.get("/", getContact);

export default router;
