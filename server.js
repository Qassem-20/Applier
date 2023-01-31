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
import mongoose from 'mongoose';


app.use(express.json());

app.get('', (req, res) => {
  res.send('Welcome to Applier project');
});

//admin
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/reviews',reviewRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/panel',adminPanelRouter)

// assign a port for the server
const port = process.env.PORT || 4000;

/*
app.listen(4000,()=> {
  console.log('server is started on port 4000')
})
using another method to connect db
const uri = 'mongodb+srv://Applier:BxgZfhoTOE2MVVl5@applier.dvrqop4.mongodb.net/applier?retryWrites=true&w=majority'

async function connect(){ 
  try{
    await mongoose.connect(uri);
    console.log("DB is connected")
  }catch(error){
    console.error(error);
  }
}
connect();
*/

// DB connection to mongoose atlas the URL in env file
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
