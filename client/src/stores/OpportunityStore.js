import { create } from "zustand";
import axios from "axios";

const OpportunityStore = create((set) => ({
  opportunities: null,

  fetchOpportunities: async () => {
    // Fetch the opportunities
    const res = await axios.get("/opportunities");
    // Set to state
    set({ opportunities: res.data.opportunities });
  },

  deleteOpportunity: async (_id) => {
    const res = await axios.delete(
      "/opportunities/" + _id
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

  updateOpportunity: async (e) => {
    e.preventDefault();

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
      `/opportunities/${_id}`,
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
      }
    );

    // Update state
    const newOpportunities = [...opportunities];
    const opportunityIndex = opportunities.findIndex((opportunity) => {
      return opportunity._id === _id;
    });
    newOpportunities[opportunityIndex] = res.data.opportunity;

    set({
      opportunities: newOpportunities,
      updateType: {
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
    visibility: "",
  },

  registerOpportunity: async (e) => {
    e.preventDefault();
    const { values, opportunities } = OpportunityStore.getState();

    // add opportunity
    const res = await axios.post(
      "/opportunities/registerOpportunity",
      values
    );
    set({
      opportunities: [...opportunities, res.data.opportunity],
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
        visibility: "",
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

export default OpportunityStore;
