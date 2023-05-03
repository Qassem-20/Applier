import express from "express";

import dotenv from "dotenv";
dotenv.config();

// create an express app
const app = express();
app.use(express.json());

//cookie-parser for login
import cookieParser from "cookie-parser";
app.use(cookieParser());

//db authentication
import connectDB from "./db/connect.js";

// to handle the errors
import "express-async-errors";

app.get("", (req, res) => {
  res.send("Welcome to Applier project");
});

//company routes
import companyRoutes from "./routes/companyRoutes.js";
app.use("/api/v1", companyRoutes);

//consumer routes
import consumerRoutes from "./routes/consumerRoutes.js";
app.use("/api/v1", consumerRoutes);

//medicalStudents routes
import medicalStudentsRoutes from "./routes/medicalStudentsRoutes.js";
app.use("/api/v1", medicalStudentsRoutes);

//admin routes
import adminRoutes from "./routes/adminRoutes.js";
app.use("/api/v1", adminRoutes);

//review routes
import reviewRoutes from "./routes/reviewRoutes.js";
app.use("/api/v1", reviewRoutes);

//applications routes
import patientApplicationRoutes from "./routes/patientApplicationRoutes.js";
app.use("/api/v1", patientApplicationRoutes);

//opportunity routes
import opportunitiesRoutes from "./routes/opportunitiesRoutes.js";
app.use("/api/v1", opportunitiesRoutes);

//opportunity routes
import traineeApplication from "./routes/traineeApplications.js";
app.use("/api/v1", traineeApplication);

// assign a port for the server
const port = process.env.PORT || 4000;

// DB connection to mongoose atlas the URL in env file
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}, and DB is connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
