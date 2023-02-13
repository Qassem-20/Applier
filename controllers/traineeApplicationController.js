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
  
  const createTraineeApplication = async (req, res) => {
    const { name, email, password, type, phone } = req.body;
  
    const traineeApplication = await TraineeApplication.create({
      name,
      email,
      password,
      type,
      phone, 
    });
  
    res.json({ traineeApplication });
  };
  
  const updatePatientApplication = async (req, res) => {
    const traineeApplicationId = req.params.id;
  
    const { type } = req.body;
  
    await TraineeApplication.findByIdAndUpdate(traineeApplicationId, {
      type,
    });
  
    const traineeApplication = await TraineeApplication.findById(traineeApplicationId);
  
    res.json({ traineeApplication });
  };
  
  const deleteTraineeApplication = async (req, res) => {
    const traineeApplicationId = req.params.id;
  
    await TraineeApplication.deleteOne({ id: traineeApplicationId });
  
    res.json({ success: "Record deleted" });
  };
  
  export {
    fetchTraineeApplications,
    fetchTraineeApplication,
    createTraineeApplication,
    updateTraineeApplication,
    deleteTraineeApplication,
  };