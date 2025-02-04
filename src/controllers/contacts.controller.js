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

    const {id} = req.params
    const updateContact = await ContactModel.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).send({
        updateContact,
        success:true
    })
})
const deleteContacts = asyncHandler(async (req,res) =>  {

    const {id} = req.params
    const deleteContact = await ContactModel.findByIdAndDelete(id)
    res.status(200).send(
        {deleteContact, success:true}
    )
})

const contactsController =  {
    getContacts,
    createContacts,
    updateContacts,
    deleteContacts,
}

export default contactsController