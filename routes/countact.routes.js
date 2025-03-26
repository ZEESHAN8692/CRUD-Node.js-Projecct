import express from "express";
import {
  getContact,
  showContactPage,
  addContactPage,
  addContact,
  updateContactPage,
  updateContact,
  deleteContact,
} from "../controller/contact.controller.js";
const router = express.Router();

router.get("/", getContact);
router.get("/show-contact/:id", showContactPage);
router.get("/add-contacts", addContactPage);
router.post("/add-contacts/", addContact);
router.get("/update-contact/:id", updateContactPage);
router.post("/update-contact/:id", updateContact);
router.get("/delete-contact/:id", deleteContact);

export default router;
