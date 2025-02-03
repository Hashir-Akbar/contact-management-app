import asyncHandler  from "express-async-handler";
import {ContactModel}  from "../Models/contacts.model.js";


const getContacts = asyncHandler(async (req,res) =>  {
         const getContacts = await ContactModel.find({})
         res.status(200).send(getContacts)
})



const createContacts = asyncHandler(async (req,res) =>  {
      const createContact = await ContactModel.create(req.body);
      res.status(201).send({createContact, success:true});
})
const updateContacts = asyncHandler((req,res) =>  {

    res.status(200).send("update")
})
const deleteContacts = asyncHandler((req,res) =>  {

    res.status(200).send("delete")
})

const contactsController =  {
    getContacts,
    createContacts,
    updateContacts,
    deleteContacts,
}

export default contactsController