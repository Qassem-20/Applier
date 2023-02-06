import Company from '../../models/company.js';
import { StatusCodes } from 'http-status-codes';
const register = async (req, res) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      throw new BadRequestError('please provide all values');
    }
    const adminAlreadyExists = await Admin.findOne({ email });
    if (adminAlreadyExists) {
      throw new BadRequestError('Email already in use');
    }
    const company = await Company.create({ name, email, password,type });
  
    const token = admin.createJWT();
    attachCookie({ res, token });
    res.status(StatusCodes.CREATED).json({
        admin: {
        email: admin.email,
        type: admin.type,
        location: admin.location,
        name: admin.name,
      },
    });
};
const login = async(req,res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new BadRequestError('Please provide all values');
    }
    const admin = await Admin.findOne({ email }).select('+password');
    if (!admin) {
      throw new UnAuthenticatedError('Invalid Credentials');
    }
  
    const isPasswordCorrect = await admin.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new UnAuthenticatedError('Invalid Credentials');
    }
    const token = admin.createJWT();
    attachCookie({ res, token });
    admin.password = undefined;
  
    res.status(StatusCodes.OK).json({ admin, location: admin.location });
};

const updateAdmin = async(req,res) => {
    const { email, name, type, location } = req.body;
    if (!email || !name || !type || !location) {
      throw new BadRequestError('Please provide all values');
    }
    const admin = await Admin.findOne({ _id: req.admin.adminId });
  
    admin.email = email;
    admin.name = name;
    admin.type = type;
    admin.location = location;
  
    await admin.save();
  
    const token = admin.createJWT();
    attachCookie({ res, token });
  
    res.status(StatusCodes.OK).json({ admin, location: admin.location });
};

const getCurrentAdmin = async (req, res) => {
    const admin = await Admin.findOne({ _id: req.admin.adminId });
    res.status(StatusCodes.OK).json({ admin, location: admin.location });
};

const logout = async (req, res) => {
    res.cookie('token', 'logout', {
      httpOnly: true,
      expires: new Date(Date.now() + 1000),
    });
    res.status(StatusCodes.OK).json({ msg: 'admin logged out!' });
};

export {register,login,logout,updateAdmin,getCurrentAdmin}