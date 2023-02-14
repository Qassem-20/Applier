import Company from '../models/Company.js';

const fetchCompanies = async (req, res) => {

    const companies = await Company.find();

      res.json({ companies });
  };
  
  const fetchCompany = async (req, res) => {
    const companyId = req.params.id;

    const company = await Company.findById(companyId);
    
    res.json({ company });
  };
  
  const createCompany = async (req, res) => {
    const { name, email, password, type, phone } = req.body;
  
    const company = await Company.create({
      name,
      email,
      password,
      type,
      phone, 
    });
  
    res.json({ company });
  };
  
  const updateCompany = async (req, res) => {
    const companyId = req.params.id;
  
    const { type } = req.body;
  
    await Company.findByIdAndUpdate(companyId, {
      type,
    });
  
    const company = await Company.findById(companyId);
  
    res.json({ company });
  };
  
  const deleteCompany = async (req, res) => {
    const companyId = req.params.id;
  
    await Company.findByIdAndDelete( companyId );
  
    res.json({ success: "Record deleted" });
  };
  
  export {
    fetchCompanies,
    fetchCompany,
    createCompany,
    updateCompany,
    deleteCompany,
  };