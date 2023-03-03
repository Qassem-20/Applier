import express from "express";

import dotenv from "dotenv";
dotenv.config();

const app = express();
//db authentication
import connectDB from "./db/connect.js";

// to handle the errors
import "express-async-errors";

//cors middleware
import cors from "cors";
app.use(cors());

app.use(express.json());

app.get("", (req, res) => {
  res.send("Welcome to Applier project");
});

//admin routes
import adminRoutes from "./routes/adminRoutes.js";
app.use("/api/v1", adminRoutes);

//company routes
import companyRoutes from "./routes/companyRoutes.js";
app.use("/api/v1", companyRoutes);

//consumer routes
import consumerRoutes from "./routes/consumerRoutes.js";
app.use("/api/v1", consumerRoutes);

//medicalStudents routes
import medicalStudentsRoutes from "./routes/medicalStudentsRoutes.js";
app.use("/api/v1", medicalStudentsRoutes);

//review routes
import reviewRoutes from "./routes/reviewRoutes.js";
app.use("/api/v1", reviewRoutes);

//applications routes
import patientApplicationRoutes from "./routes/patientApplicationRoutes.js";
import traineeApplicationRoutes from "./routes/traineeApplicationRoutes.js";
app.use("/api/v1", patientApplicationRoutes);
app.use("/api/v1", traineeApplicationRoutes);

//opportunity routes
import opportunitiesRoutes from "./routes/opportunitiesRoutes.js";
app.use("/api/v1", opportunitiesRoutes);

//cookie-parser for login
import cookieParser from "cookie-parser";
app.use(cookieParser());

// assign a port for the server
const port = process.env.PORT || 4000;

//connection to the front end
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import { request } from "http";
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// DB connection to mongoose atlas the URL in env file
// 1- npm i dotenv
// 2- create file named (.env), then write MONGO_URL=your connection link
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}, ans DB is connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
