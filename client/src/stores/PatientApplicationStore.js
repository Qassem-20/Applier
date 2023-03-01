import { create } from "zustand";
import axios from "axios";

const PatientApplicationStore = create((set) => ({
  patientApplications: null,

  fetchPatientApplications: async () => {
    // Fetch the patientApplications
    const res = await axios.get(
      "http://localhost:4000/api/v1/patientApplications"
    );
    // Set to state
    set({ patientApplications: res.data.patientApplications });
  },

  deletePatientApplication: async (_id) => {
    const res = await axios.delete(
      "http://localhost:4000/api/v1/patientApplications/" + _id
    );

    const { patientApplications } = PatientApplicationStore.getState();

    //update page;
    const newPatientApplications = [...patientApplications].filter(
      (patientApplication) => {
        return patientApplication._id !== _id;
      }
    );
    set({ patientApplications: newPatientApplications });
  },

  updateStatue: {
    _id: null,
    statue: "",
  },

  updatePatientApplication: async (e) => {
    e.preventDefault();

    const {
      updateStatue: { statue, _id },
      patientApplications,
    } = PatientApplicationStore.getState();

    // Send the update request
    const res = await axios.put(
      `http://localhost:4000/api/v1/patientApplications/${_id}`,
      {
        statue,
      }
    );

    // Update state
    const newPatientApplications = [...patientApplications];
    const patientApplicationIndex = patientApplications.findIndex(
      (patientApplication) => {
        return patientApplication._id === _id;
      }
    );
    newPatientApplications[patientApplicationIndex] =
      res.data.patientApplication;

    set({
      patientApplications: newPatientApplications,
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

  registerPatientApplication: async (e) => {
    e.preventDefault();
    const { values, patientApplications } = PatientApplicationStore.getState();

    // add PatientApplication
    const res = await axios.post(
      "http://localhost:4000/api/v1/patientApplications/registerPatientApplication",
      values
    );
    set({
      patientApplications: [
        ...patientApplications,
        res.data.patientApplication,
      ],
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

export default PatientApplicationStore;
