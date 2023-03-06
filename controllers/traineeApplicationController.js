import TraineeApplication from '../models/TraineeApplication.js';

const fetchTraineeApplications = async (req, res) => {

    const traineeApplications = await TraineeApplication.find();

      res.json({ traineeApplications });
  };
  
  const fetchTraineeApplication = async (req, res) => {
    const traineeApplicationId = req.params.id;

    const traineeApplication = await TraineeApplication.findById(traineeApplicationId);
    
    res.json({ traineeApplication });
  };

  const findTraineeApplication =async (req, res) =>{
    try {
      const traineeApplicationName = req.params.university;
      const findName = await TraineeApplication.find({university:{ $regex:'.*'+traineeApplicationName+'.*'} });
      res.json(findName);
    } catch (error) {
      res.json({message: error});        
    }
  }
  
  const sortTraineeApplicationByGPA = async (req, res) => {
    const sortedGpa = await TraineeApplication.find().sort({ gpa: 1 });
  
    res.json({ sortedGpa });
  };
  
  const createTraineeApplication = async (req, res) => {
    const { university, major, gpa, gpa_statue, concentrated_major, skills, cv, linkedIn_profile, experience } = req.body;
  
    const traineeApplication = await TraineeApplication.create({
    university, 
    major, 
    gpa, 
    gpa_statue, 
    concentrated_major, 
    skills, 
    cv, 
    linkedIn_profile, 
    experience, 
    });
  
    res.json({ traineeApplication });
  };
  
  const updateTraineeApplication = async (req, res) => {
    const traineeApplicationId = req.params.id;
  
    const { university, major, gpa, gpa_statue, concentrated_major, skills, cv, linkedIn_profile, experience } = req.body;
  
    await TraineeApplication.findByIdAndUpdate(traineeApplicationId, {
      university, 
      major, 
      gpa, 
      gpa_statue, 
      concentrated_major, 
      skills, 
      cv, 
      linkedIn_profile, 
      experience,     
    });
  
    const traineeApplication = await TraineeApplication.findById(traineeApplicationId);
  
    res.json({ traineeApplication });
  };
  
  const deleteTraineeApplication = async (req, res) => {
    const traineeApplicationId = req.params.id;
  
    await TraineeApplication.findByIdAndDelete( traineeApplicationId );
  
    res.json({ success: "Record deleted" });
  };
  
  export {
    fetchTraineeApplications,
    fetchTraineeApplication,
    createTraineeApplication,
    updateTraineeApplication,
    deleteTraineeApplication,
    sortTraineeApplicationByGPA, 
    findTraineeApplication,
  };