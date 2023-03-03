import { create } from "zustand";
import axios from "axios";

const ConsumerStore = create((set) => ({
  consumers: null,

  fetchConsumers: async () => {
    // Fetch the consumers
    const res = await axios.get("/consumers");
    // Set to state
    set({ consumers: res.data.consumers });
  },

  deleteConsumer: async (_id) => {
    const res = await axios.delete(
      "/consumers/" + _id
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
    phone_number: "",
    nationality: "",
  },

  updateConsumer: async (e) => {
    e.preventDefault();

    const {
      updateProfile: { name, email, phone_number, nationality, _id },
      consumers,
    } = ConsumerStore.getState();

    // Send the update request
    const res = await axios.put(
      `/consumers/${_id}`,
      {
        name,
        email,
        phone_number,
        nationality,
      }
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
        phone_number: "",
        nationality: "",
      },
    });
  },

  values: {
    name: "",
    email: "",
    password: "",
    phone_number: "",
    nationality: "",
  },

  registerConsumer: async (e) => {
    e.preventDefault();
    const { values, consumers } = ConsumerStore.getState();

    // add consumer
    const res = await axios.post(
      "/consumers/registerConsumer",
      values
    );
    set({
      consumers: [...consumers, res.data.consumer],
      values: {
        name: "",
        email: "",
        password: "",
        phone_number: "",
        nationality: "",
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

export default ConsumerStore;
