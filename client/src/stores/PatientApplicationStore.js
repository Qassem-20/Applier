import { create } from "zustand";
import axios from "axios";

const PatientApplicationStore = create((set) => ({
  patientApplications: null,

  fetchPatientApplications: async () => {
    // Fetch the patientApplications
    const res = await axios.get(
      "/patientApplications"
    );
    // Set to state
    set({ patientApplications: res.data.patientApplications });
  },

  deletePatientApplication: async (_id) => {
    const res = await axios.delete(
      "/patientApplications/" + _id
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
    symptoms: "",
  },

  updatePatientApplication: async (e) => {
    e.preventDefault();

    const {
      updateStatue: { symptoms, _id },
      patientApplications,
    } = PatientApplicationStore.getState();

    // Send the update request
    const res = await axios.put(
      `/patientApplications/${_id}`,
      {
        symptoms,
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
        symptoms: "",
      },
    });
  },

  values: {
    symptoms: "",
  },

  registerPatientApplication: async (e) => {
    e.preventDefault();
    const { values, patientApplications } = PatientApplicationStore.getState();

    // add PatientApplication
    const res = await axios.post(
      "/patientApplications/registerPatientApplication",
      values
    );
    set({
      patientApplications: [
        ...patientApplications,
        res.data.patientApplication,
      ],
      values: {
        symptoms: "",
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
