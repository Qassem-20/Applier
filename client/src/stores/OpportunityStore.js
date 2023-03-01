import { create } from "zustand";
import axios from "axios";

const OpportunityStore = create((set) => ({
  opportunities: null,

  fetchOpportunities: async () => {
    // Fetch the opportunities
    const res = await axios.get("http://localhost:4000/api/v1/opportunities");
    // Set to state
    set({ opportunities: res.data.opportunities });
  },

  deleteOpportunity: async (_id) => {
    const res = await axios.delete(
      "http://localhost:4000/api/v1/opportunities/" + _id
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
    statue: "",
  },

  updateOpportunity: async (e) => {
    e.preventDefault();

    const {
      updateStatue: { statue, _id },
      opportunities,
    } = OpportunityStore.getState();

    // Send the update request
    const res = await axios.put(
      `http://localhost:4000/api/v1/opportunities/${_id}`,
      {
        statue,
      }
    );

    // Update state
    const newOpportunities = [...opportunities];
    const opportunityIndex = opportunities.findIndex((opportunity) => {
      return opportunity._id === _id;
    });
    newOpportunities[opportunity] = res.data.opportunity;

    set({
      opportunities: newOpportunities,
      updateType: {
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

  registerOpportunity: async (e) => {
    e.preventDefault();
    const { values, opportunities } = OpportunityStore.getState();

    // add opportunity
    const res = await axios.post(
      "http://localhost:4000/api/v1/opportunities/registerOpportunity",
      values
    );
    set({
      opportunities: [...opportunities, res.data.opportunity],
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

export default OpportunityStore;
