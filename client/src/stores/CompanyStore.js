import { create } from "zustand";
import axios from "axios";

const CompanyStore = create((set) => ({
  companies: null,

  fetchCompanies: async () => {
    // Fetch the companies
    const res = await axios.get("/companies");
    // Set to state
    set({ companies: res.data.companies });
  },

  deleteCompany: async (_id) => {
    const res = await axios.delete(
      "/companies/" + _id
    );

    const { companies } = CompanyStore.getState();

    //update page;
    const newCompanies = [...companies].filter((company) => {
      return company._id !== _id;
    });
    set({ companies: newCompanies });
  },

  updateProfile: {
    _id: null,
    organization_name: "",
    register_number: "",
    organization_phone: "",
    organization_website: "",
    organization_bio: "",
    supervisor_name: "",
    organization_email: "",
    email: "",
    supervisor_phone: "",
    country: "",
    city: "",
  },

  updateProfileCompany: async (e) => {
    e.preventDefault();

    const {
      updateProfile: {
        organization_name,
        register_number,
        organization_phone,
        organization_website,
        organization_bio,
        supervisor_name,
        organization_email,
        supervisor_phone,
        country,
        city,
        _id,
      },
      companies,
    } = CompanyStore.getState();

    // Send the update request
    const res = await axios.put(
      `/companies/${_id}`,
      {
        organization_name,
        register_number,
        organization_phone,
        organization_website,
        organization_bio,
        supervisor_name,
        organization_email,
        supervisor_phone,
        country,
        city,
      }
    );

    // Update state
    const newCompanies = [...companies];
    const companyIndex = companies.findIndex((company) => {
      return company._id === _id;
    });
    newCompanies[companyIndex] = res.data.company;

    set({
      companies: newCompanies,
      updateProfile: {
        _id: null,
        organization_name: "",
        register_number: "",
        organization_phone: "",
        organization_website: "",
        organization_bio: "",
        supervisor_name: "",
        password: "",
        organization_email: "",
        email: "",
        supervisor_phone: "",
        country: "",
        city: "",
      },
    });
  },

  values: {
    organization_name: "",
    register_number: "",
    organization_phone: "",
    organization_website: "",
    organization_bio: "",
    supervisor_name: "",
    password: "",
    organization_email: "",
    email: "",
    supervisor_phone: "",
    country: "",
    city: "",
  },

  registerCompany: async (e) => {
    e.preventDefault();
    const { values, companies } = CompanyStore.getState();

    // add company
    const res = await axios.post(
      "/companies/registerCompany",
      values
    );
    set({
      companies: [...companies, res.data.company],
      values: {
        organization_name: "",
        register_number: "",
        organization_phone: "",
        organization_website: "",
        organization_bio: "",
        supervisor_name: "",
        password: "",
        organization_email: "",
        email: "",
        supervisor_phone: "",
        country: "",
        city: "",
      },
    });
  },

  handleChange: async (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        values: {
          ...state.values,
          [name]: value,
        },
      };
    });
  },
}));

export default CompanyStore;
