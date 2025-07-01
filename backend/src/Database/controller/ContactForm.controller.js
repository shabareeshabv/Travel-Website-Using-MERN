import ContactForm from "../model/ContactFormModel.js";
const CreateContactForm=async(req,res)=>{
    try{
        const createcontactform=new ContactForm (req.body)
        await createcontactform.save()
        res.status(201).json({createcontactform})
        console.log(createcontactform)
    }
    catch(error){
        res.status(400).json({message:"error Creating in contact form",error})
    }
}

const GetContactForm=async(req,res)=>{
    try{
        const  getcontactform= await ContactForm.find()
        res.json({getcontactform})
    }
    catch(error){
        res.status(500).json({error:"data fetch error"})
    }
}

const UpdateContactForm = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedContactForm = await ContactForm.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedContactForm) 
        {
            return res.status(404).json({ message: "Contact form not found" });
        }

        res.json({ message: "Updated successfully", updatedContactForm });
    } catch (error) {
        res.status(500).json({ error: "Error while updating contact form" });
    }
};
const RemoveContactForm = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContactForm = await ContactForm.findByIdAndDelete(id);

        if (!deletedContactForm) {
            return res.status(404).json({ message: "Contact form not found" });
        }

        res.json({ message: "Contact form deleted successfully", deletedContactForm });
    } catch (error) {
        res.status(500).json({ error: "Error deleting contact form" });
    }
};

export {CreateContactForm,GetContactForm,UpdateContactForm,RemoveContactForm}