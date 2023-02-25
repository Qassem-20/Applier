import Company from '../models/Company.js';

const fetchCompanies = async (req, res) => {

    const companies = await Company.find();

      res.json({ companies });
      /*
      const { status, jobType, sort, search } = req.query;

      const queryObject = {
        createdBy: req.user.userId,
      };
      // add stuff based on condition
    
      if (status && status !== 'all') {
        queryObject.status = status;
      }
      if (jobType && jobType !== 'all') {
        queryObject.jobType = jobType;
      }
      if (search) {
        queryObject.position = { $regex: search, $options: 'i' };
      }
      // NO AWAIT
    
      let result = Job.find(queryObject);
    
      // chain sort conditions
    
      if (sort === 'latest') {
        result = result.sort('-createdAt');
      }
      if (sort === 'oldest') {
        result = result.sort('createdAt');
      }
      if (sort === 'a-z') {
        result = result.sort('position');
      }
      if (sort === 'z-a') {
        result = result.sort('-position');
      }
    
      //
    
      // setup pagination
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const skip = (page - 1) * limit;
    
      result = result.skip(skip).limit(limit);
    
      const jobs = await result;
    
      const totalJobs = await Job.countDocuments(queryObject);
      const numOfPages = Math.ceil(totalJobs / limit);
    
      res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages });
    */
  };
  
  const fetchCompany = async (req, res) => {
    const companyId = req.params.id;

    const company = await Company.findById(companyId);
    
    res.json({ company });
  };
  
  const createCompany = async (req, res) => {
    const { organization_name, register_number, organization_phone, organization_website, organization_bio, Supervisor_name, Password, organization_email, email, supervisor_phone, city, statue, activatedBy, Country } = req.body;
  
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
      statue,
      activatedBy, 
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