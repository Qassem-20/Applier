import MedicalStudent from "../models/MedicalStudent.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const fetchMedicalStudents = async (req, res) => {
  const medicalStudents = await MedicalStudent.find();

  res.json({ medicalStudents });
};

const fetchMedicalStudent = async (req, res) => {
  const medicalStudentId = req.params.id;

  const medicalStudent = await MedicalStudent.findById(medicalStudentId);

  res.json({ medicalStudent });
};

const createMedicalStudent = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone_number,
      nationality,
      city,
      gender,
      main_major,
      specialty,
    } = req.body;

    //hash the password
    const hashedPassword = bcrypt.hashSync(password, 8);

    const medicalStudent = await MedicalStudent.create({
      name,
      email,
      password: hashedPassword,
      phone_number,
      nationality,
      city,
      gender,
      main_major,
      specialty,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const loginMedicalStudent = async (req, res) => {
  try {
    // Get the email and password off rq body
    const { email, password } = req.body;

    // Find the medicalStudent with requested email
    const medicalStudent = await MedicalStudent.findOne({ email });

    //if medicalStudent isn't exist on DB
    if (!medicalStudent) return res.sendStatus(401);

    // Compare sent in password with found medicalStudent password hash
    const passwordMatch = bcrypt.compareSync(password, medicalStudent.password);
    if (!passwordMatch) return res.sendStatus(401);

    // token is valid for 30 days
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
    // create a jwt token
    const token = jwt.sign(
      { sub: medicalStudent._id, exp },
      process.env.JWT_SECRET
    );

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

function logoutMedicalStudent(req, res) {
  try {
    res.cookie("Authorization", "", { expires: new Date() });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

function checkAuthMedicalStudent(req, res) {
  try {
    res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(400);
  }
}

const updateMedicalStudent = async (req, res) => {
  const medicalStudentId = req.params.id;

  const {
    name,
    email,
    phone_number,
    nationality,
    city,
    gender,
    profile_visibility,
    main_major,
    specialty,
  } = req.body;

  await MedicalStudent.findByIdAndUpdate(medicalStudentId, {
    name,
    email,
    phone_number,
    nationality,
    city,
    gender,
    profile_visibility,
    main_major,
    specialty,
  });

  const medicalStudent = await MedicalStudent.findById(medicalStudentId);

  res.json({ medicalStudent });
};

const activateMedicalStudent = async (req, res) => {
  const medicalStudentId = req.params.id;

  const { statue } = req.body;

  await MedicalStudent.findByIdAndUpdate(medicalStudentId, {
    statue,
  });

  const medicalStudent = await MedicalStudent.findById(medicalStudentId);

  res.json({ medicalStudent });
};

const deleteMedicalStudent = async (req, res) => {
  const medicalStudentId = req.params.id;

  await MedicalStudent.findByIdAndDelete(medicalStudentId);

  res.json({ success: "Record deleted" });
};

export {
  fetchMedicalStudents,
  fetchMedicalStudent,
  createMedicalStudent,
  loginMedicalStudent,
  logoutMedicalStudent,
  checkAuthMedicalStudent,
  updateMedicalStudent,
  deleteMedicalStudent,
  activateMedicalStudent,
};
