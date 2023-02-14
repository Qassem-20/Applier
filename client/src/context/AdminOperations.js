import { create } from "zustand";
import axios from "axios";

const AdminOperations = create((set) => ({
  admins: null,

  createForm: {
    name: "",
    email: "",
    phone: "",
    password: "",
    type: "",
  },

  updateForm: {
    _id: null,
    name: "",
    email: "",
    phone: "",
    password: "",
    type: "",
  },

  fetchAdmins: async () => {
    const res = await axios.get("http://localhost:4000/api/v1/admins");

    // Set to state
    set({ admins: res.data.admins });
  },

  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },

  createAdmin: async (e) => {
    e.preventDefault();

    const { createForm, admins } = AdminOperations.getState();
    const res = await axios.post("http://localhost:4000/api/v1/registerAdmin", createForm);

    set({
      admins: [...admins, res.data.admin],
      createForm: {
        name: "",
        email: "",
        phone: "",
        password: "",
        type: "",
      },
    });
  },

  deleteAdmin: async (_id) => {
    const res = await axios.delete(`http://localhost:4000/api/v1/admins/${_id}`);
    const { admins } = AdminOperations.getState();

    // Update state
    const newAdmins = admins.filter((admin) => {
      return admin._id !== _id;
    });

    set({ admins: newAdmins });
  },

  handleUpdateFieldChange: (e) => {
    const { value, name } = e.target;

    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },

  toggleUpdate: ({ _id, name, email,password,type,phone }) => {
    set({
      updateForm: {
        name,
        email, 
        password, 
        type,
        phone,
        _id,
      },
    });
  },

  updateAdmin: async (e) => {
    e.preventDefault();

    const {
      updateForm: { name, email, password, type, phone, _id },
      admins,
    } = AdminOperations.getState();

    // Send the update request
    const res = await axios.put(`http://localhost:4000/api/v1/admins/${_id}`, {
      name,
      email, 
      password, 
      type,
      phone,
    });

    // Update state
    const newAdmins = [...admins];
    const adminIndex = admins.findIndex((admin) => {
      return admin._id === _id;
    });
    newAdmins[adminIndex] = res.data.admin;

    set({
      admins: newAdmins,
      updateForm: {
        _id: null,
        name: "",
        email: "",
        phone: "",
        password: "",
        type: "",
      },
    });
  },
}));

export default AdminOperations;