import Company from "../models/Company.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const getCompanyProfile = async (req, res, next) => {
  try {
    const companyId = req.company.id; // Assuming you're using JWT or session-based authentication
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ error: "company not found" });
    }
    return res.json({ company });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const fetchCompanies = async (req, res) => {
  try {
    const companies = await Company.find();

    res.json({ companies });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const fetchCompany = async (req, res) => {
  try {
    const companyId = req.params.id;

    const company = await Company.findById(companyId);

    res.json({ company });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const findCompany = async (req, res) => {
  try {
    const companyName = req.params.name;
    const findName = await Company.find({
      organization_name: { $regex: ".*" + companyName + ".*" },
    });
    res.json(findName);
  } catch (error) {
    res.json({ message: error });
  }
};

const sortCompanies = async (req, res) => {
  try {
    const companies = await Company.find().sort({ organization_name: 1 });

    res.json({ companies });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

// Create feedback and review
const createFeedBack = async (req, res) => {
  try {
    const reviews = req.body;

    await Company.findByIdAndUpdate(companyId, reviews);

    const company = await Company.findById(companyId);

    res.json({ company });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const createCompany = async (req, res) => {
  try {
    //get the data
    const {
      organization_name,
      register_number,
      organization_website,
      organization_bio,
      supervisor_name,
      password,
      email,
      phone,
      country,
      city,
    } = req.body;

    //hash the password
    const hashedPassword = bcrypt.hashSync(password, 8);

    await Company.create({
      organization_name,
      register_number,
      organization_website,
      organization_bio,
      supervisor_name,
      password: hashedPassword,
      email,
      phone,
      country,
      city,
      statue: "false",
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
    const token = jwt.sign({ sub: company._id, exp }, process.env.SECRET);

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
  try {
    const companyId = req.params.id;

    const {
      organization_name,
      register_number,
      organization_phone,
      organization_website,
      organization_bio,
      supervisor_name,
      country,
      city,
      phone,
    } = req.body;

    await Company.findByIdAndUpdate(companyId, {
      organization_name,
      register_number,
      organization_phone,
      organization_website,
      organization_bio,
      supervisor_name,
      country,
      city,
      phone,
    });

    const company = await Company.findById(companyId);

    res.json({ company });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const deleteCompany = async (req, res) => {
  try {
    const companyId = req.params.id;

    await Company.findByIdAndDelete(companyId);

    res.json({ success: "Record deleted" });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const activateCompany = async (req, res) => {
  try {
    const companyId = req.params.id;

    const { statue } = req.body;

    await Company.findByIdAndUpdate(companyId, {
      statue,
    });

    const company = await Company.findById(companyId);

    res.json({ company });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export {
  getCompanyProfile,
  fetchCompanies,
  fetchCompany,
  createCompany,
  loginCompany,
  logoutCompany,
  checkAuthCompany,
  updateCompany,
  deleteCompany,
  activateCompany,
  findCompany,
  sortCompanies,
  createFeedBack,
};
