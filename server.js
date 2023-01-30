import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
//db authentication
import connectDB from './db/connect.js';

//admin router
import authRouter from'./routes/admin/authRoutes.js';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.use('/api/v1/auth',authRouter)

// assign a port for the server
const port = process.env.PORT || 4000;

// DB connection to mongoose atlas
const start = async () =>{
  try{
    await connectDB(/*the URL in env file*/process.env.MONGO_URL)
      app.listen(port, () => {
        console.log(`Server is listening on port ${port}..., and Data base is connected`);
      });
    } catch (error) {
      console.log(error)
  }
}

start();