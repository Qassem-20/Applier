import jwt from "jsonwebtoken";
import MedicalStudent from "../models/MedicalStudent.js";

async function requireAuthMedicalStudent(req, res, next) {
  try {
    // Read token off cookies
    const token = req.cookies.Authorization;

    // Decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

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
}

export default requireAuthMedicalStudent;
