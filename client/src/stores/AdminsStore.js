import { create } from "zustand";
import axios from "axios";

const AdminsStore = create((set) => ({
  admins: null,

  fetchAdmins: async () => {
    // Fetch the admins
    const res = await axios.get("http://localhost:4000/api/v1/admins", {
      withCredentials: true,
    });
    // Set to state
    set({ admins: res.data.admins });
  },

  deleteAdmin: async (_id) => {
    const res = await axios.delete(
      "http://localhost:4000/api/v1/admins/" + _id,
      { withCredentials: true }
    );

    const { admins } = AdminsStore.getState();

    //update page;
    const newAdmins = [...admins].filter((admin) => {
      return admin._id !== _id;
    });
    set({ admins: newAdmins });
  },

  updateType: {
    _id: "",
    type: "",
  },
  handleUpdateFieldChange: (e) => {
    const { value, name } = e.target;

    set((state) => {
      return {
        updateType: {
          ...state.updateType,
          [name]: value,
        },
      };
    });
  },

  toggleUpdate: ({ _id, type }) => {
    set({
      updateType: {
        _id,
        type,
      },
    });
  },

  updateAdminType: async (e) => {
    e.preventDefault();

    const {
      updateType: { type, _id },
      admins,
    } = AdminsStore.getState();

    // Send the update request
    const res = await axios.put(
      `http://localhost:4000/api/v1/admins/${_id}`,
      {
        type,
      },
      { withCredentials: true }
    );

    // Update state
    const newAdmins = [...admins];
    const adminIndex = admins.findIndex((admin) => {
      return admin._id === _id;
    });
    newAdmins[adminIndex] = res.data.admin;

    set({
      admins: newAdmins,
      updateType: {
        _id: null,
        type: "",
      },
    });
  },

  values: {
    name: "",
    email: "",
    type: "",
    phone: "",
    password: "",
  },

  registerAdmin: async () => {
    const { values } = AdminsStore.getState();

    // add admin
    const res = await axios.post(
      "http://localhost:4000/api/v1/registerAdmin",
      values,
      { withCredentials: true }
    );
    set({
      values: {
        name: "",
        email: "",
        type: "",
        phone: "",
        password: "",
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
    email: "",
    password: "",
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
  loginAdmin: async () => {
    const { loginForm } = AdminsStore.getState();

    await axios.post("http://localhost:4000/api/v1/loginAdmin", loginForm, {
      withCredentials: true,
    });

    set({ loggedIn: true });
  },
  checkAuth: async () => {
    try {
      await axios.get("http://localhost:4000/api/v1/checkAuthAdmin", {
        withCredentials: true,
      });
      set({ loggedIn: true });
    } catch (err) {
      set({ loggedIn: false });
    }
  },
  logout: async () => {
    await axios.get("http://localhost:4000/api/v1/logutAdmin", {
      withCredentials: true,
    });
    set({ loggedIn: false });
  },
}));

export default AdminsStore;
