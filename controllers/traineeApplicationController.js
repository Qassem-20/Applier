import ApplicationStatus from '../models/applicationStatus.js';

const fetchApplications = async (req, res) => {

    const applicationStatus = await ApplicationStatus.find();

      res.json({ applicationStatus });
  };
  
  const fetchApplication = async (req, res) => {
    const applicationStatusId = req.params.id;

    const applicationStatus = await ApplicationStatus.findById(applicationStatusId);
    
    res.json({ applicationStatus });
  };

  const findApplication =async (req, res) =>{
    try {
      const symptoms = req.params.symptoms;
      const findName = await ApplicationStatus.find({symptoms:{ $regex:'.*'+symptoms+'.*'} });
      res.json(findName);
    } catch (error) {
      res.json({message: error});        
    }
  }
  
  const sortApplication = async (req, res) => {
    const symptoms = await ApplicationStatus.find().sort({ symptoms: 1 });
  
    res.json({ symptoms });
  };
  
  const createApplication = async (req, res) => {
    const { symptoms, createdBy} = req.body;
  
    const applicationStatus = await ApplicationStatus.create({
      symptoms, 
    });
  
    res.json({ applicationStatus });
  };
  
  const updateApplication = async (req, res) => {
    const applicationStatusId = req.params.id;
  
    const { symptoms } = req.body;
  
    await ApplicationStatus.findByIdAndUpdate(applicationStatusId, {
      symptoms,
    });
  
    const patientApplication = await ApplicationStatus.findById(applicationStatusId);
  
    res.json({ patientApplication });
  };
  
  const deleteApplication = async (req, res) => {
    const applicationStatusId = req.params.id;
  
    await ApplicationStatus.findByIdAndDelete( applicationStatusId );
  
    res.json({ success: "Record deleted" });
  };
  
  export {
    fetchApplications,
    fetchApplication,
    createApplication,
    updateApplication,
    deleteApplication,
    sortApplication, 
    findApplication,
  };