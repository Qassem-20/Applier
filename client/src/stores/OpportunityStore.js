import { create } from "zustand";
import axios from "axios";

const OpportunityStore = create((set) => ({
  opportunities: null,
  opportunity: null,
  fetchOpportunities: async () => {
    // Fetch the opportunities
    const res = await axios.get(
      "http://localhost:4000/api/v1/OpportunitiesApplications",
      { withCredentials: true }
    );

    // Set to state
    set({ opportunities: res.data });
  },

  fetchOpportunity: async (_id) => {
    // Fetch the consumers
    const res = await axios.get(
      `http://localhost:4000/api/v1/opportunities/${_id}`,
      {
        withCredentials: true,
      }
    );
    // Set to state
    set({ opportunity: res.data.opportunity });
  },

  fetchOpportunitiesCompany: async () => {
    // Fetch the opportunities
    const res = await axios.get(
      "http://localhost:4000/api/v1/opportunitiesCompany",
      { withCredentials: true }
    );
    // Set to state
    set({ opportunities: res.data.opportunities });
  },

  // fetchOpportunitiesCompanySorted
  fetchOpportunitiesCompanySorted: async () => {
    // Fetch the opportunities
    const res = await axios.get(
      "http://localhost:4000/api/v1/fetchOpportunitiesCompanySorted",
      { withCredentials: true }
    );
    // Set to state
    set({ opportunities: res.data.opportunities });
  },

  deleteOpportunity: async (_id) => {
    const res = await axios.delete(
      "http://localhost:4000/api/v1/opportunities/" + _id,
      { withCredentials: true }
    );

    const { opportunities } = OpportunityStore.getState();

    //update page;
    const newOpportunities = [...opportunities].filter((opportunity) => {
      return opportunity._id !== _id;
    });
    set({ opportunities: newOpportunities });
  },

  updateStatue: {
    _id: null,
    job_role: "",
    description: "",
    skills: "",
    job_type: "",
    departments_preferred: "",
    major_preferred: "",
    availability_seats: "",
    salary: "",
    start_date: "",
    duration: "",
    city: "",
    visibility: "",
  },
  toggleUpdate: ({
    _id,
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
  }) => {
    set({
      updateStatue: {
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
        _id,
      },
    });
  },
  updateOpportunity: async () => {
    const {
      updateStatue: {
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
        _id,
      },
      opportunities,
    } = OpportunityStore.getState();

    // Send the update request
    const res = await axios.put(
      `http://localhost:4000/api/v1/opportunities/${_id}`,
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
      },
      { withCredentials: true }
    );

    set({
      updateStatue: {
        _id: null,
        job_role: "",
        description: "",
        skills: "",
        job_type: "",
        departments_preferred: "",
        major_preferred: "",
        availability_seats: "",
        salary: "",
        start_date: "",
        duration: "",
        city: "",
        visibility: "",
      },
    });
  },

  values: {
    job_role: "",
    description: "",
    skills: "",
    job_type: "",
    departments_preferred: "",
    major_preferred: "",
    availability_seats: "",
    salary: "",
    start_date: "",
    duration: "",
    city: "",
  },

  registerOpportunity: async () => {
    const { values } = OpportunityStore.getState();

    // add opportunity
    const res = await axios.post(
      "http://localhost:4000/api/v1/opportunities/registerOpportunity",
      values,
      { withCredentials: true }
    );
    set({
      values: {
        job_role: "",
        description: "",
        skills: "",
        job_type: "",
        departments_preferred: "",
        major_preferred: "",
        availability_seats: "",
        salary: "",
        start_date: "",
        duration: "",
        city: "",
      },
    });
  },
  application: {
    application: "",
  },
  handleUpdate: async (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        updateStatue: {
          ...state.updateStatue,
          [name]: value,
        },
      };
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

export default OpportunityStore;
