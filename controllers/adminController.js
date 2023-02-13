import Admin from '../models/Admin.js';

const fetchAdmins = async (req, res) => {

    const admins = await Admin.find();

      res.json({ admins });
  };
  
  const fetchAdmin = async (req, res) => {
    const adminId = req.params.id;

    const admin = await Admin.findById(adminId);
    
    res.json({ admin });
  };
  
  const createAdmin = async (req, res) => {
    const { name, email, password, type, phone } = req.body;
  
    const admin = await Admin.create({
      name,
      email,
      password,
      type,
      phone, 
    });
  
    res.json({ admin });
  };
  
  const updateAdmin = async (req, res) => {
    const adminId = req.params.id;
  
    const { type } = req.body;
  
    await Admin.findByIdAndUpdate(adminId, {
      type,
    });
  
    const admin = await Admin.findById(adminId);
  
    res.json({ admin });
  };
  
  const deleteAdmin = async (req, res) => {
    const adminId = req.params.id;
  
    await Admin.deleteOne({ id: adminId });
  
    res.json({ success: "Record deleted" });
  };
  
  export {
    fetchAdmins,
    fetchAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin,
  };