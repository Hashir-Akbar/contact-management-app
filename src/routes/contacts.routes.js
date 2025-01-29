import {Router} from "express";
import contactsController from "../controllers/contacts.controller.js";

const router = Router();

const {getContacts, createContacts, deleteContacts, updateContacts} = contactsController



router.get("/contacts", getContacts);
router.post("/contacts", createContacts);
router.patch("/contacts:id", updateContacts);
router.delete("/contacts", deleteContacts);



export default router;



