import {Router} from "express";
import contactsController from "../controllers/contacts.controller.js";

const router = Router();

const {getContacts} = contactsController



router.get("/contacts", getContacts);


export default router;



