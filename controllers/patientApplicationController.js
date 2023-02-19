import PatientApplication from '../models/PatientApplication.js';

const fetchPatientApplications = async (req, res) => {

    const patientApplications = await PatientApplication.find();

      res.json({ patientApplications });
  };
  
  const fetchPatientApplication = async (req, res) => {
    const patientApplicationId = req.params.id;

    const patientApplication = await PatientApplication.findById(patientApplicationId);
    
    res.json({ patientApplication });
  };
  
  const createPatientApplication = async (req, res) => {
    const { symptoms, createdBy} = req.body;
  
    const patientApplication = await PatientApplication.create({
      symptoms, 
    });
  
    res.json({ patientApplication });
  };
  
  const updatePatientApplication = async (req, res) => {
    const patientApplicationId = req.params.id;
  
    const { symptoms } = req.body;
  
    await PatientApplication.findByIdAndUpdate(patientApplicationId, {
      symptoms,
    });
  
    const patientApplication = await PatientApplication.findById(patientApplicationId);
  
    res.json({ patientApplication });
  };
  
  const deletePatientApplication = async (req, res) => {
    const patientApplicationId = req.params.id;
  
    await PatientApplication.findByIdAndDelete( patientApplicationId );
  
    res.json({ success: "Record deleted" });
  };
  
  export {
    fetchPatientApplications,
    fetchPatientApplication,
    createPatientApplication,
    updatePatientApplication,
    deletePatientApplication,
  };