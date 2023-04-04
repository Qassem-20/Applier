import ApplicationStatus from "../models/applicationStatus.js";
import mongoose from "mongoose";

const fetchApplications = async (req, res) => {
  const applicationStatus = await ApplicationStatus.find();

  res.json({ applicationStatus });
};

const fetchApplication = async (req, res) => {
  const applicationStatusId = req.params.id;

  const applicationStatus = await ApplicationStatus.findById(
    applicationStatusId
  );

  res.json({ applicationStatus });
};

const fetchApplicationsOpportunity = async (req, res) => {
  const opportunity = mongoose.Types.ObjectId(req.params.opportunity);
  const applicationStatus = await ApplicationStatus.find({ opportunity });

  res.json({ applicationStatus });
};

const findApplication = async (req, res) => {
  try {
    const symptoms = req.params.symptoms;
    const findName = await ApplicationStatus.find({
      symptoms: { $regex: ".*" + symptoms + ".*" },
    });
    res.json(findName);
  } catch (error) {
    res.json({ message: error });
  }
};

const sortApplication = async (req, res) => {
  const symptoms = await ApplicationStatus.find().sort({ symptoms: 1 });

  res.json({ symptoms });
};

const createApplication = async (req, res) => {
  const { statue, opportunity } = req.body;

  const applicationStatus = await ApplicationStatus.create({
    statue,
    opportunity,
    consumer: req.consumer._id,
  });

  res.json({ applicationStatus });
};

const updateApplication = async (req, res) => {
  const applicationStatusId = req.params.id;

  const { statue } = req.body;

  await ApplicationStatus.findByIdAndUpdate(applicationStatusId, {
    statue,
    consumer: req.consumer._id,
  });

  const applicationStatus = await ApplicationStatus.findById(
    applicationStatusId
  );

  res.json({ applicationStatus });
};
const getApplicationStatus = async (req, res) => {
  try {
    const { opportunity } = req.params;

    // Check if the user has applied for the opportunity
    const application = await Application.findOne({
      opportunity: opportunity,
      consumer: req.consumer._id,
    });

    const hasApplied = !!application; // Convert application object to boolean

    res.json({ hasApplied });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteApplication = async (req, res) => {
  const applicationStatusId = req.params.id;

  await ApplicationStatus.findByIdAndDelete(applicationStatusId);

  res.json({ success: "Record deleted" });
};

export {
  fetchApplications,
  fetchApplication,
  fetchApplicationsOpportunity,
  createApplication,
  updateApplication,
  getApplicationStatus,
  deleteApplication,
  sortApplication,
  findApplication,
};
