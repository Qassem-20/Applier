import Opportunity from "../models/Opportunity.js";

//Consumer and Admin to fetch all Opportunities
const fetchOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find();

    res.json({ opportunities });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

//Company to fetch Opportunities for each company
const fetchOpportunitiesCompany = async (req, res) => {
  try {
    const opportunities = await Opportunity.find({
      company: req.company._id,
    }).sort({ createdAt: 1 });

    res.json({ opportunities });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const fetchOpportunity = async (req, res) => {
  try {
    const opportunityId = req.params.id;

    const opportunity = await Opportunity.findById(opportunityId);

    res.json({ opportunity });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const findOpportunity = async (req, res) => {
  try {
    const opportunityName = req.params.name;
    const findName = await Opportunity.find({
      job_role: { $regex: ".*" + opportunityName + ".*" },
    });
    res.json(findName);
  } catch (error) {
    res.json({ message: error });
  }
};

const fetchOpportunitiesCompanySorted = async (req, res) => {
  try {
    const opportunities = await Opportunity.find({
      company: req.company._id,
    }).sort({ createdAt: -1 });

    res.json({ opportunities });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const createOpportunity = async (req, res) => {
  try {
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
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const updateOpportunity = async (req, res) => {
  try {
    const opportunityId = req.params.id;

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

    await Opportunity.findOneAndUpdate(
      { _id: opportunityId, company: req.company._id },
      {
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
      }
    );

    const opportunity = await Opportunity.findById(opportunityId);

    res.json({ opportunity });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const hideOpportunity = async (req, res) => {
  try {
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
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const deleteOpportunity = async (req, res) => {
  try {
    const opportunityId = req.params.id;

    await Opportunity.findByIdAndDelete(opportunityId);

    res.json({ success: "Record deleted" });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export {
  fetchOpportunities,
  fetchOpportunitiesCompany,
  fetchOpportunity,
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
  hideOpportunity,
  fetchOpportunitiesCompanySorted,
  findOpportunity,
};
