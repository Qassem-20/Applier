import Admin from '../models/admin.js';

const fetchAdmins = async (req, res) => {
    // Find the notes
    const admins = await Admin.find();
  
    // Respond with them
    res.json({ admins });
  };
  
  const fetchAdmin = async (req, res) => {
    // Get id off the url
    const adminId = req.params.id;
  
    // Find the note using that id
    const admin = await Admin.findById(adminId);
  
    // Respond with the note
    res.json({ admin });
  };
  
  const createAdmin = async (req, res) => {
    // Get the sent in data off request body
    const { name, email, password, type, phone } = req.body;
  
    //encrypt password

    // Create a note with it
    const admin = await Admin.create({
      name,
      email,
      password,
      type,
      phone, 
    });
  
    // respond with the new note
    res.json({ admin });
  };
  
  const updateAdmin = async (req, res) => {
    // Get the id off the url
    const adminId = req.params.id;
  
    // Get the data off the req body
    const { type } = req.body;
  
    // Find and update the record
    await Admin.findByIdAndUpdate(adminId, {
      type,
    });
  
    // Find updated note
    const admin = await Admin.findById(adminId);
  
    // Respond with it
    res.json({ admin });
  };
  
  const deleteAdmin = async (req, res) => {
    // get id off url
    const adminId = req.params.id;
  
    // Delete the record
    await Admin.deleteOne({ id: adminId });
  
    // Respond
    res.json({ success: "Record deleted" });
  };
  
  export {
    fetchAdmins,
    fetchAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin,
  };