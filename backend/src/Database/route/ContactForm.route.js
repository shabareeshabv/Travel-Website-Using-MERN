import express from "express"
import { CreateContactForm,GetContactForm,UpdateContactForm,RemoveContactForm } from "../controller/ContactForm.controller.js"
const ContactFormRoute=express.Router();

ContactFormRoute.post("/",CreateContactForm);
ContactFormRoute.get('/',GetContactForm)
ContactFormRoute.put("/:id",UpdateContactForm);
ContactFormRoute.delete("/:id",RemoveContactForm);
export default ContactFormRoute;