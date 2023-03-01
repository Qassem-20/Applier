import { create } from "zustand";
import axios from "axios";

const ConsumerStore = create((set) => ({
  consumers: null,

  fetchConsumers: async () => {
    // Fetch the consumers
    const res = await axios.get("http://localhost:4000/api/v1/consumers");
    // Set to state
    set({ consumers: res.data.consumers });
  },

  deleteConsumer: async (_id) => {
    const res = await axios.delete(
      "http://localhost:4000/api/v1/consumers/" + _id
    );

    const { consumers } = ConsumerStore.getState();

    //update page;
    const newConsumers = [...consumers].filter((consumer) => {
      return consumer._id !== _id;
    });
    set({ consumers: newConsumers });
  },

  updateStatue: {
    _id: null,
    statue: "",
  },

  updateConsumer: async (e) => {
    e.preventDefault();

    const {
      updateStatue: { statue, _id },
      consumers,
    } = ConsumerStore.getState();

    // Send the update request
    const res = await axios.put(
      `http://localhost:4000/api/v1/consumers/${_id}`,
      {
        statue,
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

  registerConsumer: async (e) => {
    e.preventDefault();
    const { values, consumers } = ConsumerStore.getState();

    // add consumer
    const res = await axios.post(
      "http://localhost:4000/api/v1/consumers/registerConsumer",
      values
    );
    set({
      consumers: [...consumers, res.data.consumer],
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

export default ConsumerStore;
