import express from "express";
import Contact from "../model/contact.model.js";
import mongoose from "mongoose";

export const getContact = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const option = {
      page: parseInt(page),
      limit: parseInt(limit),
    };
    const result = await Contact.paginate({}, option);

    if (!result) {
      res.render("404", { massege: "Contact Not Found" });
    }
    // res.send(result);
    res.render("home", {
      totalDocs: result.totalDocs,
      limit: result.limit,
      totalPages: result.totalPages,
      currentPage: result.page,
      counter: result.pagingCounter,
      hasPrevPage: result.hasPrevPage,
      hasNextPage: result.hasNextPage,
      prevPage: result.prevPage,
      nextPage: result.nextPage,
      contact: result.contact,
      contact: result.docs,
    });
  } catch (error) {
    res.render("500", { massege: error });
  }
};

export const showContactPage = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.redirect("404", { massege: "Invalid Id" });
  }
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.render("404", { massege: "Contact Not Found" });
    }
    res.render("show-contact", { contact });
  } catch (error) {
    res.render("500", { massege: error });
  }
};
export const addContactPage = async (req, res) => {
  res.render("add-contacts");
};

export const addContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    if (!contact) {
      res.render("404", { massege: "Contact Not Found" });
    }
    res.redirect("/");
  } catch (error) {
    res.render("500", { massege: error });
  }
};

export const updateContactPage = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.render("404", { massege: "Invalid Id" });
  }
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.render("404", { massege: "Contact Not Found" });
    }
    res.render("update-contact", { contact });
  } catch (error) {
    res.render("500", { massege: error });
  }
};

export const updateContact = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.render("404", { massege: "Invalid Id" });
  }
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
    if (!contact) {
      res.render("404", { massege: "Contact Not Found" });
    }
    res.redirect("/");
  } catch (error) {
    res.render("500", { massege: error });
  }
};
export const deleteContact = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.render("404", { massege: "Invalid Id" });
  }
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      res.render("404", { massege: "Contact Not Found" });
    }
    res.redirect("/");
  } catch (error) {
    res.render("500", { massege: error });
  }
};
