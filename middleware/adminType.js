import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

async function adminType(req, res, next) {
  try {
    // Read token off cookies or from headers
    const token =
      req.cookies.AuthorizationMedical || req.headers.AuthorizationMedical;

    // Decode the token
    const decoded = jwt.verify(token, process.env.SECRET);

    // Check expiration
    if (Date.now() > decoded.exp) return res.sendStatus(401);

    // Find user using decoded sub
    const user = await Admin.findById(decoded.sub);
    if (!user) return res.sendStatus(401);

    // Check user's type
    if (user.type === "false") {
      return res.status(401).json({
        message: "Access denied.",
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

export { adminType };
