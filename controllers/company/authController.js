import admin from '../../models/admin.js';
import { StatusCodes } from 'http-status-codes';
const register = async(req,res) => {
    try{
        const admin = await admin.create(req.body);
    }catch(error){
        next(error)
    }
}
const login = async(req,res) => {
    res.send('login user')
}
const updateUser = async(req,res) => {
    res.send(' user')
}

export {register,login,updateUser}