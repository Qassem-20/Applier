import MedicalStudent from "../models/MedicalStudent.js";

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
  const { name, email, password, phone_number } = req.body;

  const medicalStudent = await MedicalStudent.create({
    name,
    email,
    password,
    phone_number,
  });

  res.json({ medicalStudent });
};

const updateMedicalStudent = async (req, res) => {
  const medicalStudentId = req.params.id;

  const { name, email, phone_number } = req.body;

  await MedicalStudent.findByIdAndUpdate(medicalStudentId, {
    name,
    email,
    phone_number,
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
  updateMedicalStudent,
  deleteMedicalStudent,
  activateMedicalStudent,
};
