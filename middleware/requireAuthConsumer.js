import jwt from "jsonwebtoken";
import Consumer from "../models/Consumer.js";

async function requireAuthConsumer(req, res, next) {
  try {
    // Read token off cookies
    const token = req.cookies.Authorization;

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
}

export default requireAuthConsumer;
