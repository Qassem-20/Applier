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
    const { organization_name, register_number, organization_phone, organization_website, organization_bio, Supervisor_name, Password, organization_email, email, supervisor_phone, city, statue, Country } = req.body;
  
    const company = await Company.create({
      organization_name,
      register_number,
      organization_phone,
      organization_bio,
      Supervisor_name,
      Password,
      organization_email,
      email,
      supervisor_phone,
      Country,
      city,
    });
  
    res.json({ company });
  };
  
  const updateCompany = async (req, res) => {
    const companyId = req.params.id;
  
    const {  organization_name, register_number, organization_phone, organization_website, organization_bio, Supervisor_name, Password, organization_email, email, supervisor_phone, Country, city } = req.body;
  
    await Company.findByIdAndUpdate(companyId, {
      organization_name,
      register_number,
      organization_phone,
      organization_bio,
      Supervisor_name,
      Password,
      organization_email,
      email,
      supervisor_phone,
      Country,
      city,
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