import express from "express";
// import Contacts from "../Models/contacts.models.js";

export const getContact = async (req, res) => {
  // const contact = await Contacts.find();
  // res.json(contact);

  res.render("home");
};
