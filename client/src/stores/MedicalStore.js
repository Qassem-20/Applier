import { create } from "zustand";
import axios from "axios";

const MedicalStore = create((set) => ({
  medicalStudents: null,
  medicalStudent:null,

  fetchMedicalProfile : async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/medicalStudentProfile",
        {
          withCredentials: true,
        }
      );
      set({consumer:response.data.medicalStudent});
    } catch (error) {
      console.error(error);
      // TODO: Handle errors
    }
  },
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
  toggleUpdate: ({ 
    _id,
    name,
    phone_number,
    nationality,
    city,
    gender,
    profile_visibility,
    main_major,
    specialty,
   }) => {
    set({
      updateProfile: {
        name,
        phone_number,
        nationality,
        city,
        gender,
        profile_visibility,
        main_major,
        specialty,
        _id,
      },
    });
  },
  updateMedicalStudents: async () => {

    const {
      updateProfile: {
        name,
        phone_number,
        nationality,
        city,
        gender,
        profile_visibility,
        main_major,
        specialty,
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

  handleUpdate: async (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        updateProfile: {
          ...state.updateProfile,
          [name]: value,
        },
      };
    });
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
