import express from "express";
import Contact from "../model/contact.model.js";

export const getContact = async (req, res) => {
  const contact = await Contact.find();
  res.render("home", { contact });
};

export const showContactPage = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("show-contact", { contact });
};
export const addContactPage = async (req, res) => {
  res.render("add-contacts");
};

export const addContact = async (req, res) => {
  const contact = await Contact.create(req.body);
  res.redirect("/");
};

export const updateContactPage = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("update-contact", { contact });
};

export const updateContact = async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
};
export const deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
