import jwt from "jsonwebtoken";
import MedicalStudent from "../models/MedicalStudent.js";

async function checkStatueMedical(req, res, next) {
  try {
    // Read token off cookies or from headers
    const token =
      req.cookies.AuthorizationMedical || req.headers.AuthorizationMedical;

    // Decode the token
    const decoded = jwt.verify(token, process.env.SECRET);

    // Check expiration
    if (Date.now() > decoded.exp) return res.sendStatus(401);

    // Find user using decoded sub
    const user = await MedicalStudent.findById(decoded.sub);
    if (!user) return res.sendStatus(401);

    // Check user's statue
    if (user.statue === "false") {
      return res.status(401).json({
        message: "Access denied. Your account has been deactivated.",
      });
    } else {
      return res.status(401).json({
        message: "Your account is active",
      });
    }

    // attach user to req
    req.user = user;

    // continue on
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
}
export { checkStatueMedical };
