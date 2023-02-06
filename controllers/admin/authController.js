import Admin from '../../models/Admin.js';
import { StatusCodes } from 'http-status-codes';
const register = async (req, res) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      throw new BadRequestError('please provide all values');
    }
    const userAlreadyExists = await Admin.findOne({ email });
    if (userAlreadyExists) {
      throw new BadRequestError('Email already in use');
    }
    const admin = await Admin.create({ name, email, password,type });
  
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
    res.send('login user')
}
const updateUser = async(req,res) => {
    res.send(' user')
}

export {register,login,updateUser}