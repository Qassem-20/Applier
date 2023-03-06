import Company from "../models/Company.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

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
  try {
    //get the data
    const {
      organization_name,
      register_number,
      organization_phone,
      organization_website,
      organization_bio,
      supervisor_name,
      password,
      organization_email,
      email,
      supervisor_phone,
      country,
      city,
      statue,
    } = req.body;

    //hash the password
    const hashedPassword = bcrypt.hashSync(password, 8);

    await Company.create({
      organization_name,
      register_number,
      organization_phone,
      organization_website,
      organization_bio,
      supervisor_name,
      password: hashedPassword,
      organization_email,
      email,
      supervisor_phone,
      country,
      city,
      statue,
      activatedBy,
    });

    //respond
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const loginCompany = async (req, res) => {
  try {
    // Get the email and password off rq body
    const { email, password } = req.body;

    // Find the company with requested email
    const company = await Company.findOne({ email });

    //if company isn't exist on DB
    if (!company) return res.sendStatus(401);

    // Compare sent in password with found company password hash
    const passwordMatch = bcrypt.compareSync(password, company.password);
    if (!passwordMatch) return res.sendStatus(401);

    // token is valid for 30 days
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
    // create a jwt token
    const token = jwt.sign({ sub: company._id, exp }, process.env.JWT_SECRET);

    // Set the cookie
    res.cookie("AuthorizationCompany", token, {
      expires: new Date(exp),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    // send it
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

function logoutCompany(req, res) {
  try {
    res.cookie("AuthorizationCompany", "", { expires: new Date() });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

function checkAuthCompany(req, res) {
  try {
    res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(400);
  }
}
const updateCompany = async (req, res) => {
  const companyId = req.params.id;

  const {
    organization_name,
    register_number,
    organization_phone,
    organization_website,
    organization_bio,
    Supervisor_name,
    Password,
    organization_email,
    email,
    supervisor_phone,
    country,
    city,
    statue,
    activatedBy,
  } = req.body;

  await Company.findByIdAndUpdate(companyId, {
    organization_name,
    register_number,
    organization_phone,
    organization_website,
    organization_bio,
    supervisor_name,
    organization_email,
    email,
    supervisor_phone,
    country,
    city,
    statue,
    activatedBy,
  });

  const company = await Company.findById(companyId);

  res.json({ company });
};

const deleteCompany = async (req, res) => {
  const companyId = req.params.id;

  await Company.findByIdAndDelete(companyId);

  res.json({ success: "Record deleted" });
};

const activateCompany = async (req, res) => {
  const companyId = req.params.id;

  const { statue } = req.body;

  await Company.findByIdAndUpdate(companyId, {
    statue,
  });

  const company = await Company.findById(companyId);

  res.json({ company });
};

export {
  fetchCompanies,
  fetchCompany,
  createCompany,
  loginCompany,
  logoutCompany,
  checkAuthCompany,
  updateCompany,
  deleteCompany,
  activateCompany,
};
