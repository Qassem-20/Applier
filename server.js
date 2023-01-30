import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
//db authentication
import connectDB from './db/connect.js';

//admin routes
import authRouter from'./routes/admin/authRoutes.js';
import adminPanelRouter from'./routes/admin/adminPanelRoutes.js';
import reviewRouter from'./routes/admin/reviewRoutes.js';
import userRouter from'./routes/admin/usersRoutes.js';


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Applier project');
});

//admin
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/reviews',reviewRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/panel',adminPanelRouter)

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