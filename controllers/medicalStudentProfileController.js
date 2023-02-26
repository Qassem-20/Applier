import MedicalProfile from '../models/ProfileMedicalStudent.js';

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
    const { nationality, city, gender, profile_visibility, main_major, specialty } = req.body;
  
    const medicalProfile = await MedicalProfile.create({
    nationality, 
    city, 
    gender, 
    profile_visibility, 
    main_major, 
    specialty,
    });
  
    res.json({ medicalProfile });
  };
  
  const updateMedicalProfile = async (req, res) => {
    const medicalProfileId = req.params.id;
  
    const { nationality, city, gender, profile_visibility, main_major, specialty } = req.body;
  
    await MedicalProfile.findByIdAndUpdate(medicalProfileId, {
      nationality, 
      city, 
      gender, 
      profile_visibility, 
      main_major, 
      specialty,
    });
  
    const medicalProfile = await MedicalProfile.findById(medicalProfileId);
  
    res.json({ medicalProfile });
  };

  const deleteMedicalProfile = async (req, res) => {
    const medicalProfileId = req.params.id;
  
    await MedicalProfile.findByIdAndDelete( medicalProfileId );
  
    res.json({ success: "Record deleted" });
  };
  
  export {
    fetchMedicalProfiles,
    fetchMedicalProfile,
    createMedicalProfile,
    updateMedicalProfile,
    deleteMedicalProfile,
  };