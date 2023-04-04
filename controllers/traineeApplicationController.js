import ApplicationStatus from "../models/applicationStatus.js";
import Consumer from "../models/Consumer.js";
import Opportunity from "../models/Opportunity.js";

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
  try {

    const opportunityId = mongoose.Types.ObjectId(req.params.opportunity);
  
 
      // Find the opportunity in the database
      const opportunity = await Opportunity.findById(opportunityId);
  
      if (!opportunity) {
        return res.status(404).json({ error: 'Opportunity not found' });
      }
  
      // Find all the application statuses for the given opportunity
      const applicationStatuses = await ApplicationStatus.find({ opportunity: opportunityId });
  
      // Get the consumer IDs from the application statuses
      const consumerIds = applicationStatuses.map(status => status.consumer);
  
      // Find all the consumers with the given IDs
      const consumers = await Consumer.find({ _id: { $in: consumerIds } });
  
      // Extract the desired fields from the consumer documents
      const consumerInfo = consumers.map(consumer => ({
        name: consumer.name,
        email: consumer.email,
        phone: consumer.phone,
        linkedin: consumer.linkedin,
        major: consumer.major,
        gpa: consumer.gpa,
        city: consumer.city
      }));
  
      // Return the application statuses and consumer information
      res.json({
        applicationStatuses: applicationStatuses.map(status => status.statue),
        consumerInfo
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
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
