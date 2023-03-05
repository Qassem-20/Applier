import { create } from "zustand";
import axios from "axios";

const MedicalStore = create((set) => ({
  medicalStudents: null,

  fetchMedicalStudents: async () => {
    // Fetch the medicalStudents
    const res = await axios.get("http://localhost:4000/api/v1/medicalStudents");
    // Set to state
    set({ medicalStudents: res.data.medicalStudents });
  },

  deleteMedicalStudent: async (_id) => {
    const res = await axios.delete(
      "http://localhost:4000/api/v1/medicalStudents/" + _id
    );

    const { medicalStudents } = MedicalStore.getState();

    //update page;
    const newMedicalStudents = [...medicalStudents].filter((medicalStudent) => {
      return medicalStudent._id !== _id;
    });
    set({ medicalStudents: newMedicalStudents });
  },

  updateProfile: {
    _id: null,
    name: "",
    phone_number: "",
    nationality: "",
    city: "",
    gender: "",
    profile_visibility: "",
    main_major: "",
    specialty: "",
  },

  updateMedicalStudents: async (e) => {
    e.preventDefault();

    const {
      updateProfile: {
        name,
        nationality,
        city,
        gender,
        profile_visibility,
        main_major,
        specialty,
        phone_number,
        _id,
      },
      medicalStudents,
    } = MedicalStore.getState();

    // Send the update request
    const res = await axios.put(
      `http://localhost:4000/api/v1/medicalStudents/${_id}`,
      {
        name,
        phone_number,
        nationality,
        city,
        gender,
        profile_visibility,
        main_major,
        specialty,
      }
    );

    // Update state
    const newMedicalStudents = [...medicalStudents];
    const medicalStudentIndex = medicalStudents.findIndex((medicalStudent) => {
      return medicalStudent._id === _id;
    });
    newMedicalStudents[medicalStudentIndex] = res.data.medicalStudent;

    set({
      medicalStudents: newMedicalStudents,
      updateProfile: {
        _id: null,
        name: "",
        phone_number: "",
        nationality: "",
        city: "",
        gender: "",
        profile_visibility: "",
        main_major: "",
        specialty: "",
      },
    });
  },

  values: {
    name: "",
    email: "",
    phone_number: "",
    password: "",
    nationality: "",
    city: "",
    gender: "",
    main_major: "",
    specialty: "",
  },

  registerAdmin: async (e) => {
    e.preventDefault();
    const { values, medicalStudents } = MedicalStore.getState();

    // add medicalStudent
    const res = await axios.post(
      "http://localhost:4000/api/v1/registerAdmin",
      values
    );
    set({
      medicalStudents: [...medicalStudents, res.data.medicalStudent],
      values: {
        name: "",
        email: "",
        phone_number: "",
        password: "",
        phone_number: "",
        nationality: "",
        city: "",
        gender: "",
        main_major: "",
        specialty: "",
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

export default MedicalStore;
