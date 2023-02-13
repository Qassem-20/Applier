import Opportunity from '../models/Opportunities.js';

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
    const { name, email, password, type, phone } = req.body;
  
    const opportunity = await Opportunity.create({
      name,
      email,
      password,
      type,
      phone, 
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
  
  const deleteOpportunity = async (req, res) => {
    const opportunityId = req.params.id;
  
    await Opportunity.deleteOne({ id: opportunityId });
  
    res.json({ success: "Record deleted" });
  };
  
  export {
    fetchOpportunities,
    fetchOpportunity,
    createOpportunity,
    updateOpportunity,
    deleteOpportunity,
  };