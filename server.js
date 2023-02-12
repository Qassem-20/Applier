import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
//db authentication
import connectDB from './db/connect.js';

// to handle the errors
import 'express-async-errors';

//admin routes
//import authRouter from'./routes/adminRoutes.js';


//cors middleware
import cors from 'cors';
app.use(cors());

app.use(express.json());

app.get('', (req, res) => {
  res.send('Welcome to Applier project');
});

//admin routes
import {fetchAdmins, fetchAdmin, createAdmin, updateAdmin, deleteAdmin} from './controllers/adminController.js';
app.get("/api/v1/admins", fetchAdmins);
app.get("/api/v1/admin/:id", fetchAdmin);
app.post("/api/v1/registerAdmin", createAdmin);
app.put("/api/v1/admin/:id", updateAdmin);
app.delete("/api/v1/admin/:id", deleteAdmin);

//company routes

//medicalStudents routes

//consumer routes

// assign a port for the server
const port = process.env.PORT || 4000;

//connection to the front end
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

//middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import { request } from 'http';
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// DB connection to mongoose atlas the URL in env file
// 1- npm i dotenv
// 2- create file named (.env), then write MONGO_URL=your connection link
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL, {useUnifiedTopology:true, useNewUrlParser:true});
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}, ans DB is connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
