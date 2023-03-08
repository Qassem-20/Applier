import { create } from "zustand";
import axios from "axios";

const CompanyStore = create((set) => ({
  companies: null,


 

  // searchCompanies:async(e) => {
  //   e.preventDefault();
  //   const res = await axios.get("http://localhost:4000/api/v1/companies");
  // },

  fetchCompanies: async () => {
    // Fetch the companies
    const res = await axios.get("http://localhost:4000/api/v1/companies");
    // Set to state
    set({ companies: res.data.companies });
  },

  deleteCompany: async (_id) => {
    const res = await axios.delete(
      "http://localhost:4000/api/v1/companies/" + _id
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
    organization_website: "",
    organization_bio: "",
    supervisor_name: "",
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
        organization_website,
        organization_bio,
        supervisor_name,
        supervisor_phone,
        country,
        city,
        _id,
      },
      companies,
    } = CompanyStore.getState();

    // Send the update request
    const res = await axios.put(
      `http://localhost:4000/api/v1/companies/${_id}`,
      {
        organization_name,
        register_number,
        organization_website,
        organization_bio,
        supervisor_name,
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
        organization_website: "",
        organization_bio: "",
        supervisor_name: "",
        password: "",
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
    organization_website: "",
    organization_bio: "",
    supervisor_name: "",
    password: "",
    email: "",
    phone: "",
    country: "",
    city: "",
  },

  registerCompany: async () => {
    const { values } = CompanyStore.getState();

    // add company
    const res = await axios.post(
      "http://localhost:4000/api/v1/registerCompany",
      values,
      { withCredentials: true }
    );
    set({
      values: {
        organization_name: "",
        register_number: "",
        organization_website: "",
        organization_bio: "",
        supervisor_name: "",
        password: "",
        email: "",
        phone: "",
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

  //login
  loggedIn: null,
  loginFormCompany: {
    email: "",
    password: "",
  },
  handleChangeLogin: async (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginFormCompany: {
          ...state.loginFormCompany,
          [name]: value,
        },
      };
    });
  },
  loginCompany: async () => {
    const { loginFormCompany } = CompanyStore.getState();

    await axios.post("http://localhost:4000/api/v1/loginCompany", loginFormCompany, {
      withCredentials: true,
    });

    set({ loggedIn: true });
  },
  checkAuth: async () => {
    try {
      await axios.get("http://localhost:4000/api/v1/checkAuthCompany", {
        withCredentials: true,
      });
      set({ loggedIn: true });
    } catch (err) {
      set({ loggedIn: false });
    }
  },
  logout: async () => {
    await axios.get("http://localhost:4000/api/v1/logutCompany", {
      withCredentials: true,
    });
    set({ loggedIn: false });
  },
}));

export default CompanyStore;
