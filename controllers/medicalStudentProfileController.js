import MedicalProfile from '../models/MedicalStudentProfile.js';

const fetchMedicalProfiles = async (req, res) => {

    const medicalProfiles = await MedicalProfile.find();

      res.json({ medicalProfiles });
  };
  
  const fetchMedicalProfile = async (req, res) => {
    const medicalProfileId = req.params.id;

    const medicalProfile = await MedicalProfile.findById(medicalProfileId);
    
    res.json({ medicalProfile });
  };
  
  const createMedicalProfile = async (req, res) => {
    const { name, email, password, type, phone } = req.body;
  
    const medicalProfile = await MedicalProfile.create({
      name,
      email,
      password,
      type,
      phone, 
    });
  
    res.json({ medicalProfile });
  };
  
  const updateMedicalProfile = async (req, res) => {
    const medicalProfileId = req.params.id;
  
    const { type } = req.body;
  
    await MedicalProfile.findByIdAndUpdate(medicalProfileId, {
      type,
    });
  
    const medicalProfile = await medicalProfile.findById(medicalProfileId);
  
    res.json({ medicalProfile });
  };
  
  const deleteMedicalProfile = async (req, res) => {
    const medicalProfileId = req.params.id;
  
    await MedicalProfile.deleteOne({ id: medicalProfileId });
  
    res.json({ success: "Record deleted" });
  };
  
  export {
    fetchMedicalProfiles,
    fetchMedicalProfile,
    createMedicalProfile,
    updateMedicalProfile,
    deleteMedicalProfile,
  };