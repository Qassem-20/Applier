import jwt from "jsonwebtoken";
import Company from "../models/Company.js";

async function requireAuthCompany(req, res, next) {
  try {
    // Read token off cookies
    const token = req.cookies.Authorization;

    // Decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

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
}

export default requireAuthCompany;
