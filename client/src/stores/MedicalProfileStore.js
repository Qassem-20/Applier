import { create } from "zustand";
import axios from "axios";

const MedicalProfileStore = create((set) => ({
  medicalProfiles: null,

  fetchMedicalProfiles: async () => {
    // Fetch the medicalProfiles
    const res = await axios.get("http://localhost:4000/api/v1/medicalProfiles");
    // Set to state
    set({ medicalProfiles: res.data.medicalProfiles });
  },

  deleteMedicalProfile: async (_id) => {
    const res = await axios.delete(
      "http://localhost:4000/api/v1/medicalProfiles/" + _id
    );

    const { medicalProfiles } = MedicalProfileStore.getState();

    //update page;
    const newMedicalProfiles = [...medicalProfiles].filter((medicalProfile) => {
      return medicalProfile._id !== _id;
    });
    set({ medicalProfiles: newMedicalProfiles });
  },

  updateStatue: {
    _id: null,
    statue: "",
  },

  updateMedicalProfile: async (e) => {
    e.preventDefault();

    const {
      updateStatue: { statue, _id },
      medicalProfiles,
    } = MedicalProfileStore.getState();

    // Send the update request
    const res = await axios.put(
      `http://localhost:4000/api/v1/medicalProfiles/${_id}`,
      {
        statue,
      }
    );

    // Update state
    const newMedicalProfiles = [...medicalProfiles];
    const medicalProfileIndex = medicalProfiles.findIndex((medicalProfile) => {
      return medicalProfile._id === _id;
    });
    newMedicalProfiles[medicalProfileIndex] = res.data.medicalProfile;

    set({
      medicalProfiles: newMedicalProfiles,
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

  registerMedicalProfile: async (e) => {
    e.preventDefault();
    const { values, medicalProfiles } = MedicalProfileStore.getState();

    // add medicalProfile
    const res = await axios.post(
      "http://localhost:4000/api/v1/medicalProfiles/registerMedicalProfile",
      values
    );
    set({
      medicalProfiles: [...medicalProfiles, res.data.medicalProfile],
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

export default MedicalProfileStore;
