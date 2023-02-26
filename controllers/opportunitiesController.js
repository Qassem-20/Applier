import Opportunity from "../models/Opportunities.js";

const fetchOpportunities = async (req, res) => {
  const opportunities = await Opportunity.find();

  res.json({ opportunities });
};

const fetchOpportunity = async (req, res) => {
  const opportunityId = req.params.id;

  const opportunity = await Opportunity.findById(opportunityId);

  res.json({ opportunity });
};

const createOpportunity = async (req, res) => {
  const {
    job_role,
    description,
    skills,
    job_type,
    departments_preferred,
    major_preferred,
    availability_seats,
    salary,
    start_date,
    duration,
    city,
    visibility,
  } = req.body;

  const opportunity = await Opportunity.create({
    job_role,
    description,
    skills,
    job_type,
    departments_preferred,
    major_preferred,
    availability_seats,
    salary,
    start_date,
    duration,
    city,
    visibility,
  });

  res.json({ opportunity });
};

const updateOpportunity = async (req, res) => {
  const opportunityId = req.params.id;

  const { type } = req.body;

  await Opportunity.findByIdAndUpdate(opportunityId, {
    type,
  });

  const opportunity = await Opportunity.findById(opportunityId);

  res.json({ opportunity });
};

const hideOpportunity = async (req, res) => {
  const opportunityId = req.params.id;

  const { visibility } = req.body;

  await Opportunity.findByIdAndUpdate(opportunityId, {
    visibility,
  });

  const opportunity = await Opportunity.findById(opportunityId);

  res.json({ opportunity });
};

const deleteOpportunity = async (req, res) => {
  const opportunityId = req.params.id;

  await Opportunity.findByIdAndDelete(opportunityId);

  res.json({ success: "Record deleted" });
};

export {
  fetchOpportunities,
  fetchOpportunity,
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
  hideOpportunity,
};
