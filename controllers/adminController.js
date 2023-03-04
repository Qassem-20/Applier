import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const fetchAdmins = async (req, res) => {
  const admins = await Admin.find();

  res.json({ admins });
};

const fetchAdmin = async (req, res) => {
  const adminId = req.params.id;

  const admin = await Admin.findById(adminId);

  res.json({ admin });
};

async function createAdmin(req, res) {
  try {
    //get the data
    const { name, email, password, type, phone } = req.body;

    //hash the password
    const hashedPassword = bcrypt.hashSync(password, 8);

    //create an Admin
    await Admin.create({
      name,
      email,
      //send an encrypted password
      password: hashedPassword,
      type,
      phone,
    });

    //respond
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

async function loginAdmin(req, res) {
  try {
    // Get the email and password off rq body
    const { email, password } = req.body;

    // Find the admin with requested email
    const admin = await Admin.findOne({ email });

    //if admin isn't exist on DB
    if (!admin) return res.sendStatus(401);

    // Compare sent in password with found admin password hash
    const passwordMatch = bcrypt.compareSync(password, admin.password);
    if (!passwordMatch) return res.sendStatus(401);

    // token is valid for 7 days
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 7;
    // create a jwt token
    const token = jwt.sign({ sub: admin._id, exp }, process.env.SECRET);

    // Set the cookie
    res.cookie("Authorization", token, {
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

function logoutAdmin(req, res) {
  try {
    res.cookie("Authorization", "", { expires: new Date() });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

function checkAuthAdmin(req, res) {
  try {
    res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(400);
  }
}

const updateAdmin = async (req, res) => {
  const adminId = req.params.id;

  const { type } = req.body;

  await Admin.findByIdAndUpdate(adminId, {
    type,
  });

  const admin = await Admin.findById(adminId);

  res.json({ admin });
};

const deleteAdmin = async (req, res) => {
  const adminId = req.params.id;

  await Admin.findByIdAndDelete(adminId);

  res.json({ success: "Record deleted" });
};

export {
  fetchAdmins,
  fetchAdmin,
  createAdmin,
  loginAdmin,
  logoutAdmin,
  checkAuthAdmin,
  updateAdmin,
  deleteAdmin,
};
