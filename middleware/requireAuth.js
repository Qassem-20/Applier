import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import Company from "../models/Company.js";
import Consumer from "../models/Consumer.js";
import MedicalStudent from "../models/MedicalStudent.js";


async function requireAuthAdmin(req, res, next) {
  try {
    // Read token off cookies
    const token = req.cookies.AuthorizationAdmin;

    // Decode the token
    const decoded = jwt.verify(token, process.env.SECRET);

    // Check expiration
    if (Date.now() > decoded.exp) return res.sendStatus(401);

    // Find admin using decoded sub
    const admin = await Admin.findById(decoded.sub);
    if (!admin) return res.sendStatus(401);

    // attach admin to req
    req.admin = admin;

    // continue on
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
};
async function requireAuthCompany(req, res, next) {
  try {
    // Read token off cookies
    const token = req.cookies.AuthorizationCompany;

    // Decode the token
    const decoded = jwt.verify(token, process.env.SECRET);

    // Check expiration
    if (Date.now() > decoded.exp) return res.sendStatus(401);

    // Find company using decoded sub
    const company = await Company.findById(decoded.sub);
    if (!company) return res.sendStatus(401);

    // attach company to req
    req.company = company;

    // continue on
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
};
async function requireAuthConsumer(req, res, next) {
  try {
    // Read token off cookies
    const token = req.cookies.AuthorizationConsumer;

    // Decode the token
    const decoded = jwt.verify(token, process.env.SECRET);

    // Check expiration
    if (Date.now() > decoded.exp) return res.sendStatus(401);

    // Find consumer using decoded sub
    const consumer = await Consumer.findById(decoded.sub);
    if (!consumer) return res.sendStatus(401);

    // attach consumer to req
    req.consumer = consumer;

    // continue on
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
};
async function requireAuthMedicalStudent(req, res, next) {
  try {
    // Read token off cookies
    const token = req.cookies.AuthorizationMedical;
    console.log(req.cookies.AuthorizationMedical)
    // Decode the token
    const decoded = jwt.verify(token, process.env.SECRET);

    // Check expiration
    if (Date.now() > decoded.exp) return res.sendStatus(401);

    // Find medicalStudent using decoded sub
    const medicalStudent = await MedicalStudent.findById(decoded.sub);
    if (!medicalStudent) return res.sendStatus(401);

    // attach medicalStudent to req
    req.medicalStudent = medicalStudent;

    // continue on
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
};
export { requireAuthAdmin,requireAuthCompany,requireAuthConsumer,requireAuthMedicalStudent };
