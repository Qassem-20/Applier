import Opportunity from "../models/Opportunity.js";

//Consumer and Admin to fetch all Opportunities
const fetchOpportunities = async (req, res) => {
  const opportunities = await Opportunity.find();

  res.json({ opportunities });
};

//Company to fetch Opportunities for each company
const fetchOpportunitiesCompany = async (req, res) => {
  const opportunities = await Opportunity.find({ company: req.company._id });

  res.json({ opportunities });
};

const fetchOpportunity = async (req, res) => {
  const opportunityId = req.params.id;

  const opportunity = await Opportunity.findById(opportunityId);

  res.json({ opportunity });
};

const findOpportunity = async (req, res) => {
  try {
    const opportunityName = req.params.name;
    const findName = await opportunity.find({
      job_role: { $regex: ".*" + opportunityName + ".*" },
    });
    res.json(findName);
  } catch (error) {
    res.json({ message: error });
  }
};

const sortOpportunities = async (req, res) => {
  const opportunities = await opportunity.find().sort({ job_role: 1 });

  res.json({ opportunities });
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
    visibility: "shown",
    company: req.company._id,
  });

  res.json({ opportunity });
};

const updateOpportunity = async (req, res) => {
  const opportunityId = req.params.id;

  const { type } = req.body;

  await Opportunity.findOneAndUpdate(
    { _id: opportunityId, company: req.company._id },
    {
      type,
    }
  );

  const opportunity = await Opportunity.findById(opportunityId);

  res.json({ opportunity });
};

// const infoShow = async(req, res) => {
//   const opportunityId = req.params.id;

//   const opportunity = await Opportunity.findById(opportunityId);

//   res.json({ opportunity });

// };

const hideOpportunity = async (req, res) => {
  const opportunityId = req.params.id;

  const { visibility } = req.body;

  await Opportunity.findOneAndUpdate(
    { _id: opportunityId, company: req.company._id },
    {
      visibility,
    }
  );

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
  fetchOpportunitiesCompany,
  fetchOpportunity,
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
  hideOpportunity,
  sortOpportunities,
  findOpportunity,
};
