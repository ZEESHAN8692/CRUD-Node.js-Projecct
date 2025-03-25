import express from "express";
import Contact from "../model/contact.model.js";

export const getContact = async (req, res) => {
  const contact = await Contact.find();
  res.render("home", { contact });
};

export const showContactPage = async (req, res) => {
  res.render("show-contact");
};
export const addContactPage = async (req, res) => {
  res.render("add-contact");
};

export const addContact = async (req, res) => {};

export const updateContactPage = async (req, res) => {
  res.render("update-contact");
};

export const updateContact = async (req, res) => {};
export const deleteContact = async (req, res) => {};
