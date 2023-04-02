import { create } from "zustand";
import axios from "axios";

const ConsumerStore = create((set) => ({
  consumers: null,
  fetchConsumer: async ( _id) => {
    // Fetch the consumers
    const res = await axios.get(`http://localhost:4000/api/v1/consumers/${_id}`, {
      withCredentials: true,
    });
    // Set to state
    set({ consumers: res.data.consumers });
  },

  fetchConsumers: async () => {
    // Fetch the consumers
    const res = await axios.get("http://localhost:4000/api/v1/consumers", {
      withCredentials: true,
    });
    // Set to state
    set({ consumers: res.data.consumers });
  },

  sortNameConsumers:async () =>{

    const res = await axios.get("http://localhost:4000/api/v1/sortNameConsumers")

    set({consumers : res.data.consumers})
  },
  sortDateConsumers:async () =>{

    const res = await axios.get("http://localhost:4000/api/v1/sortDateConsumers")

    set({consumers : res.data.consumers})
  },

  searchForm: {
    phone: "",
    name: "",
  },
  searchConsumers: async(e) =>{

    const { searchForm } = ConsumerStore.getState().searchForm;


    const res = await axios.get("http://localhost:4000/api/v1//findConsumer/" + searchForm.name);

    console.log(res);
    set((state) => {
      return {
        searchForm: {
          ...state.searchForm,
          // [name]: values,
        },
      };
    });

    set({ consumers: res.data.consumers });


  },


  deleteConsumer: async (_id) => {
    const res = await axios.delete(
      "http://localhost:4000/api/v1//findConsumer/" + _id,
      { withCredentials: true }
    );

    const { consumers } = ConsumerStore.getState();

    //update page;
    const newConsumers = [...consumers].filter((consumer) => {
      return consumer._id !== _id;
    });
    set({ consumers: newConsumers });
  },



  updateProfile: {
    _id: null,
    name: "",
    email: "",
    phone: "",
    nationality: "",
  },
  toggleUpdate: ({ _id,name,
    email,
    phone, }) => {
    set({
      updateProfile: {
        name,
        email,
        phone,
        _id,
      },
    });
  },
  updateConsumer: async (e) => {
    e.preventDefault();

    const {
      updateProfile: { name, email, phone, nationality, _id },
      consumers,
    } = ConsumerStore.getState();

    // Send the update request
    const res = await axios.put(
      `http://localhost:4000/api/v1/consumers/${_id}`,
      {
        name,
        email,
        phone,
        nationality,
      },
      { withCredentials: true }
    );

    // Update state
    const newConsumers = [...consumers];
    const consumerIndex = consumers.findIndex((consumer) => {
      return consumer._id === _id;
    });
    newConsumers[consumerIndex] = res.data.consumer;

    set({
      consumers: newConsumers,
      updateProfile: {
        _id: null,
        name: "",
        email: "",
        phone: "",
        nationality: "",
      },
    });
  },

  values: {
    name:"",
    email:"",
    password:"",
    phone:"",
    nationality:"",
    university:"",
    major:"",
    gpa:"",
    concentrated_major:"",
    skills:"",
    linkedIn_profile:"",
    experience:"",
    degree:""

  },

  registerConsumer: async () => {
    const { values } = ConsumerStore.getState();

    // add consumer
    const res = await axios.post(
      "http://localhost:4000/api/v1/registerConsumer",
      values,
      {
        withCredentials: true,
      }
    );
    set({
      values: {
        name:"",
        email:"",
        password:"",
        phone:"",
        nationality:"",
        university:"",
        major:"",
        gpa:"",
        concentrated_major:"",
        skills:"",
        linkedIn_profile:"",
        experience:"",
        degree:""
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

  handleSearchForm: async (e) => {
    const { name, value } = e.target;

    set(state => {
      return{
        searchForm:{
          ...state.searchForm, [name]: value,
        },
      };
    }) ;
  },

  // login
  loggedIn: null,
  loginFormConsumer: {
    email: "",
    password: "",
  },
  handleChangeLogin: async (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginFormConsumer: {
          ...state.loginFormConsumer,
          [name]: value,
        },
      };
    });
  },
  loginConsumer: async () => {
    const { loginFormConsumer } = ConsumerStore.getState();

    await axios.post("http://localhost:4000/api/v1/loginConsumer", loginFormConsumer, {
      withCredentials: true,
    });

    set({ loggedIn: true });
  },
  checkAuth: async () => {
    try {
      await axios.get("http://localhost:4000/api/v1/checkAuthConsumer", {
        withCredentials: true,
      });
      set({ loggedIn: true });
    } catch (err) {
      set({ loggedIn: false });
    }
  },
  logout: async () => {
    await axios.get("http://localhost:4000/api/v1/logutConsuemr", {
      withCredentials: true,
    });
    set({ loggedIn: false });
  },

}));


export default ConsumerStore;
