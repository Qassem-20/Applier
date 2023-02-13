import MedicalStudent from '../models/MedicalStudent.js';

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
    const { name, email, password, type, phone } = req.body;
  
    const medicalStudent = await MedicalStudent.create({
      name,
      email,
      password,
      type,
      phone, 
    });
  
    res.json({ medicalStudent });
  };
  
  const updateMedicalStudent = async (req, res) => {
    const medicalStudentId = req.params.id;
  
    const { type } = req.body;
  
    await MedicalStudent.findByIdAndUpdate(medicalStudentId, {
      type,
    });
  
    const medicalStudent = await MedicalStudent.findById(medicalStudentId);
  
    res.json({ medicalStudent });
  };
  
  const deleteMedicalStudent = async (req, res) => {
    const medicalStudentId = req.params.id;
  
    await MedicalStudent.deleteOne({ id: medicalStudentId });
  
    res.json({ success: "Record deleted" });
  };
  
  export {
    fetchMedicalStudents,
    fetchMedicalStudent,
    createMedicalStudent,
    updateMedicalStudent,
    deleteMedicalStudent,
  };