import ApplicationStatus from "../models/ApplicationStatus.js";
import Consumer from "../models/Consumer.js";
import Opportunity from "../models/Opportunity.js";

import mongoose from "mongoose";

const fetchApplications = async (req, res) => {
  try {
    const applicationStatus = await ApplicationStatus.find();

    res.json({ applicationStatus });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const fetchApplication = async (req, res) => {
  try {
    const applicationStatusId = req.params.id;

    const applicationStatus = await ApplicationStatus.findById(
      applicationStatusId
    );

    res.json({ applicationStatus });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const fetchApplicationsOpportunity = async (req, res) => {
  try {
    const opportunityId = mongoose.Types.ObjectId(req.params.opportunity);

    // Find the opportunity in the database
    const opportunity = await Opportunity.findById(opportunityId);

    if (!opportunity) {
      return res.status(404).json({ error: "Opportunity not found" });
    }

    // Find all the application statuses for the given opportunity
    const applicationStatuses = await ApplicationStatus.find({
      opportunity: opportunityId,
    });

    // Get the consumer IDs from the application statuses
    const consumerId = applicationStatuses.map((status) => status.consumer);

    // Find all the consumers with the given IDs
    const consumers = await Consumer.find({ _id: { $in: consumerId } });

    // Extract the desired fields from the consumer documents
    const consumerInfo = consumers.map((consumer) => {
      const status = applicationStatuses.find((status) =>
        status.consumer.equals(consumer._id)
      );
      return {
        _id: consumer._id,
        name: consumer.name,
        email: consumer.email,
        phone: consumer.phone,
        linkedin: consumer.linkedIn_profile,
        university: consumer.university,
        major: consumer.major,
        gpa: consumer.gpa,
        status: status ? status.statue : null,
        applicationStatusId: status ? status._id : null,
      };
    });

    // Return the application statuses and consumer information
    res.json({ consumerInfo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
const fetchOpportunityApplications = async (req, res) => {
  try {
    const consumer = mongoose.Types.ObjectId(req.params.consumer);

    // Find all opportunities in the database
    const opportunities = await Opportunity.find({ consumer });

    // For each opportunity, find its application statuses
    const opportunityInfo = await Promise.all(
      opportunities.map(async (opportunity) => {
        const applicationStatuses = await ApplicationStatus.find({
          opportunity: opportunity._id,
        });

        return {
          _id: opportunity._id,
          company: opportunity.company,
          job_role: opportunity.job_role,
          description: opportunity.description,
          major_preferred: opportunity.major_preferred,
          city: opportunity.city,
          start_date: opportunity.start_date,
          duration: opportunity.duration,
          createdAt: opportunity.createdAt,
          job_type: opportunity.job_type,
          applicationStatuses: applicationStatuses.map((statue) => ({
            _id: statue._id,
            consumer: statue.consumer,
            statue:
              statue && statue.statue !== undefined ? statue.statue : "Apply",
          })),
        };
      })
    );

    return res.status(200).json(opportunityInfo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
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
  try {
    const symptoms = await ApplicationStatus.find().sort({ symptoms: 1 });

    res.json({ symptoms });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const createApplication = async (req, res) => {
  try {
    const { statue, opportunity } = req.body;

    const applicationStatus = await ApplicationStatus.create({
      statue,
      opportunity,
      consumer: req.consumer._id,
    });

    res.json({ applicationStatus });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const updateApplication = async (req, res) => {
  try {
    const applicationStatusId = req.params.id;

    const { statue } = req.body;

    await ApplicationStatus.findByIdAndUpdate(applicationStatusId, {
      statue,
    });

    const applicationStatus = await ApplicationStatus.findById(
      applicationStatusId
    );

    res.json({ applicationStatus });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
const getApplicationStatus = async (req, res) => {
  try {
    const { opportunity } = req.params;

    // Check if the user has applied for the opportunity
    const application = await ApplicationStatus.findOne({
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
  try {
    const applicationStatusId = req.params.id;

    await ApplicationStatus.findByIdAndDelete(applicationStatusId);

    res.json({ success: "Record deleted" });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export {
  fetchApplications,
  fetchApplication,
  fetchApplicationsOpportunity,
  fetchOpportunityApplications,
  createApplication,
  updateApplication,
  getApplicationStatus,
  deleteApplication,
  sortApplication,
  findApplication,
};
