import { create } from "zustand";
import axios from "axios";

const MedicalStore = create((set) => ({
  medicalStudents: null,

  fetchMedicalStudents: async () => {
    // Fetch the medicalStudents
    const res = await axios.get(
      "http://localhost:4000/api/v1/medicalStudents",
      {
        withCredentials: true,
      }
    );
    // Set to state
    set({ medicalStudents: res.data.medicalStudents });
  },

  deleteMedicalStudent: async (_id) => {
    const res = await axios.delete(
      "http://localhost:4000/api/v1/medicalStudents/" + _id,
      {
        withCredentials: true,
      }
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
        withCredentials: true,
      },
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

  registerMedical: async () => {
    const { values } = MedicalStore.getState();

    // add medicalStudent
    const res = await axios.post(
      "http://localhost:4000/api/v1/registerMedicalStudent",
      values,
      {
        withCredentials: true,
      }
    );
    set({
      values: {
        name: "",
        email: "",
        phone_number: "",
        password: "",
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
  loginFormMedical: {
    email: "",
    password: "",
  },
  handleChangeLogin: async (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginFormMedical: {
          ...state.loginFormMedical,
          [name]: value,
        },
      };
    });
  },
  loginMedicalStudent: async () => {
    const { loginFormMedical } = MedicalStore.getState();

    await axios.post(
      "http://localhost:4000/api/v1/loginMedicalStudent",
      loginFormMedical,
      {
        withCredentials: true,
      }
    );

    set({ loggedIn: true });
  },
  checkAuth: async () => {
    try {
      await axios.get("http://localhost:4000/api/v1/checkAuthMedicalStudent", {
        withCredentials: true,
      });
      set({ loggedIn: true });
    } catch (err) {
      set({ loggedIn: false });
    }
  },
  logout: async () => {
    await axios.get("http://localhost:4000/api/v1/logutMedicalStudent", {
      withCredentials: true,
    });
    set({ loggedIn: false });
  },
}));

export default MedicalStore;
