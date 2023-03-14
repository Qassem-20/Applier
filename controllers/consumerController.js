import Consumer from "../models/Consumer.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const fetchConsumers = async (req, res) => {
  const consumers = await Consumer.find();

  res.json({ consumers });
};



const fetchConsumer = async (req, res) => {
  const consumerId = req.params.id;

  const consumer = await Consumer.findById(consumerId);

  res.json({ consumer });
};

const findConsumer =async (req, res) =>{
  try {
    const companyName = req.params.name;
    const findName = await Consumer.find({name:{ $regex:'.*'+companyName+'.*'} });
    res.json(findName);
  } catch (error) {
    res.json({message: error});        
  }
}

const sortConsumers = async (req, res) => {
  const consumers = await Consumer.find().sort({ name: 1 });

  res.json({ consumers });
};

const createConsumer = async (req, res) => {
  try {
    const { name, email, password, phone, nationality } = req.body;

    //hash the password
    const hashedPassword = bcrypt.hashSync(password, 8);

    await Consumer.create({
      name,
      email,
      password: hashedPassword,
      phone,
      nationality,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const loginConsumer = async (req, res) => {
  try {
    // Get the email and password off rq body
    const { email, password } = req.body;

    // Find the consumer with requested email
    const consumer = await Consumer.findOne({ email });

    //if consumer isn't exist on DB
    if (!consumer) return res.sendStatus(401);

    // Compare sent in password with found consumer password hash
    const passwordMatch = bcrypt.compareSync(password, consumer.password);
    if (!passwordMatch) return res.sendStatus(401);

    // token is valid for 30 days
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
    // create a jwt token
    const token = jwt.sign({ sub: consumer._id, exp }, process.env.SECRET);

    // Set the cookie
    res.cookie("AuthorizationConsumer", token, {
      expires: new Date(exp),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    // send it
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

function logoutConsumer(req, res) {
  try {
    res.cookie("AuthorizationConsumer", "", { expires: new Date() });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

function checkAuthConsumer(req, res) {
  try {
    res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(400);
  }
}

const updateConsumer = async (req, res) => {
  const consumerId = req.params.id;

  const { name, email, phone, nationality } = req.body;

  await Consumer.findByIdAndUpdate(consumerId, {
    name,
    email,
    phone,
    nationality,
  });

  const consumer = await Consumer.findById(consumerId);

  res.json({ consumer });
};

const suspendConsumer = async (req, res) => {
  const consumerId = req.params.id;

  const { statue } = req.body;

  await Consumer.findByIdAndUpdate(consumerId, {
    statue,
  });

  const consumer = await Consumer.findById(consumerId);

  res.json({ consumer });
};

const deleteConsumer = async (req, res) => {
  const consumerId = req.params.id;

  await Consumer.findByIdAndDelete(consumerId);

  res.json({ success: "Record deleted" });
};

export {
  fetchConsumers,
  fetchConsumer,
  createConsumer,
  loginConsumer,
  logoutConsumer,
  checkAuthConsumer,
  updateConsumer,
  deleteConsumer,
  suspendConsumer,
  sortConsumers,
  findConsumer,
};
