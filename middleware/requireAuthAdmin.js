import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

async function requireAuthAdmin(req, res, next) {
  try {
    // Read token off cookies
    const token = req.cookies.Authorization;

    // Decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

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
}

export default requireAuthAdmin;
