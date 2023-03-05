import { create } from "zustand";
import axios from "axios";

const CompanyStore = create((set) => ({
  companies: null,

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
      `http://localhost:4000/api/v1/companies/${_id}`,
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

  //login
  loggedIn: null,
  loginForm: {
    emailCompany: "",
    passwordCompany: "",
  },
  handleChangeLogin: async (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },
  loginCompany: async () => {
    const { loginForm } = CompanyStore.getState();

    await axios.post("http://localhost:4000/api/v1/loginCompany", loginForm, {
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
