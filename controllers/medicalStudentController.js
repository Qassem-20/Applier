import MedicalStudent from "../models/MedicalStudent.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const getMedicalStudentProfile = async (req, res, next) => {
  try {
    const medicalStudentId = req.medicalStudent.id; // Assuming you're using JWT or session-based authentication
    const medicalStudent = await MedicalStudent.findById(medicalStudentId);
    if (!medicalStudent) {
      return res.status(404).json({ error: "medicalStudent not found" });
    }
    return res.json({ medicalStudent });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const fetchMedicalStudents = async (req, res) => {
  try {
    const medicalStudents = await MedicalStudent.find({
      profile_visibility: "shown",
      statue: "true",
    });

    res.json({ medicalStudents });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
const fetchMedicalStudent = async (req, res) => {
  try {
    const medicalStudents = await MedicalStudent.find({});

    res.json({ medicalStudents });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const findMedicalStudent = async (req, res) => {
  try {
    const MedicalStudentName = req.params.name;
    const findName = await medicalStudent.find({
      name: { $regex: ".*" + MedicalStudentName + ".*" },
    });
    res.json(findName);
  } catch (error) {
    res.json({ message: error });
  }
};

const sortMedicalStudent = async (req, res) => {
  const medicalStudent = await medicalStudent.find().sort({ name: 1 });

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

    await MedicalStudent.create({
      name,
      email,
      password: hashedPassword,
      phone_number,
      nationality,
      city,
      gender,
      main_major,
      specialty,
      profile_visibility: "hidden",
      statue: "false",
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
      process.env.SECRET
    );

    // Set the cookie
    res.cookie("AuthorizationMedical", token, {
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
    res.cookie("AuthorizationMedical", "", { expires: new Date() });
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
function checkStatuesMedical(req, res) {
  try {
    res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(400);
  }
}
const updateMedicalStudent = async (req, res) => {
  try {
    const medicalStudentId = req.params.id;

    const {
      name,
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
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const activateMedicalStudent = async (req, res) => {
  try {
    const medicalStudentId = req.params.id;

    const { statue } = req.body;

    await MedicalStudent.findByIdAndUpdate(medicalStudentId, {
      statue,
    });

    const medicalStudent = await MedicalStudent.findById(medicalStudentId);

    res.json({ medicalStudent });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const deleteMedicalStudent = async (req, res) => {
  try {
    const medicalStudentId = req.params.id;

    await MedicalStudent.findByIdAndDelete(medicalStudentId);

    res.json({ success: "Record deleted" });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export {
  getMedicalStudentProfile,
  fetchMedicalStudents,
  fetchMedicalStudent,
  createMedicalStudent,
  loginMedicalStudent,
  logoutMedicalStudent,
  checkAuthMedicalStudent,
  checkStatuesMedical,
  updateMedicalStudent,
  deleteMedicalStudent,
  activateMedicalStudent,
  sortMedicalStudent,
  findMedicalStudent,
};
