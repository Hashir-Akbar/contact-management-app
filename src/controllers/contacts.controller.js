import asyncHandler  from "express-async-handler";



const getContacts = asyncHandler((req,res) =>  {

         res.status(200).send("hi")
})

const contactsController =  {
    getContacts
}

export default contactsController