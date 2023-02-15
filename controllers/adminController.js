import Admin from '../models/Admin.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';
import attachCookie from '../utils/attachCookie.js';

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
  
    const token = admin.createJWT();
    attachCookie({ res, token });

    res.json({ admin });
  };

  const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email }).select('+password');

    const isPasswordCorrect = await admin.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new UnAuthenticatedError('Invalid Credentials');
    }

    const token = admin.createJWT();
    attachCookie({ res, token });
    res.status(StatusCodes.OK).json({ admin, location: admin.location });

  }
  
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
  
    await Admin.findByIdAndDelete(adminId);
  
    res.json({ success: "Record deleted" });
  };
  
  export {
    fetchAdmins,
    fetchAdmin,
    createAdmin,
    loginAdmin,
    updateAdmin,
    deleteAdmin,
  };