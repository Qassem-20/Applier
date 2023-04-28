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

    // Check user's status
    if (user.statue === "false") {
      return res.status(401).json({
        message: "Access denied. Your account has been deactivated.",
      });
    } else {
      req.user = user;
      next(); // Call next to allow the request to continue
    }
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({
      message: "An error occurred while processing your request.",
    });
  }
}

export { checkStatueMedical };
