import PatientApplication from "../models/PatientApplication.js";

const fetchPatientApplications = async (req, res) => {
  try {
    const patientApplications = await PatientApplication.find();

    res.json({ patientApplications });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const fetchPatientApplication = async (req, res) => {
  try {
    const patientApplicationId = req.params.id;

    const patientApplication = await PatientApplication.findById(
      patientApplicationId
    );

    res.json({ patientApplication });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const findPatientApplication = async (req, res) => {
  try {
    const symptoms = req.params.symptoms;
    const findName = await patientApplication.find({
      symptoms: { $regex: ".*" + symptoms + ".*" },
    });
    res.json(findName);
  } catch (error) {
    res.json({ message: error });
  }
};

const sortPatientApplication = async (req, res) => {
  try {
    const symptoms = await patientApplication.find().sort({ symptoms: 1 });

    res.json({ symptoms });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const createPatientApplication = async (req, res) => {
  try {
    const { symptoms, createdBy } = req.body;

    const patientApplication = await PatientApplication.create({
      symptoms,
    });

    res.json({ patientApplication });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const updatePatientApplication = async (req, res) => {
  try {
    const patientApplicationId = req.params.id;

    const { symptoms } = req.body;

    await PatientApplication.findByIdAndUpdate(patientApplicationId, {
      symptoms,
    });

    const patientApplication = await PatientApplication.findById(
      patientApplicationId
    );

    res.json({ patientApplication });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const deletePatientApplication = async (req, res) => {
  try {
    const patientApplicationId = req.params.id;

    await PatientApplication.findByIdAndDelete(patientApplicationId);

    res.json({ success: "Record deleted" });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export {
  fetchPatientApplications,
  fetchPatientApplication,
  createPatientApplication,
  updatePatientApplication,
  deletePatientApplication,
  sortPatientApplication,
  findPatientApplication,
};
