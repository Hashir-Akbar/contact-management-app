import asyncHandler  from "express-async-handler";



const getContacts = asyncHandler((req,res) =>  {

         res.status(200).send("hi")
})



const createContacts = asyncHandler((req,res) =>  {

    res.status(200).send("create hi")
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