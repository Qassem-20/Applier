import { create } from "zustand";
import axios from "axios";

const TraineeApplicationStore = create((set) => ({
  traineeApplications: null,

  fetchTraineeApplications: async () => {
    // Fetch the traineeApplications
    const res = await axios.get(
      "http://localhost:4000/api/v1/traineeApplications"
    );
    // Set to state
    set({ traineeApplications: res.data.traineeApplications });
  },

  deleteTraineeApplication: async (_id) => {
    const res = await axios.delete(
      "http://localhost:4000/api/v1/traineeApplications/" + _id
    );

    const { traineeApplications } = TraineeApplicationStore.getState();

    //update page;
    const newTraineeApplications = [...traineeApplications].filter(
      (traineeApplication) => {
        return traineeApplication._id !== _id;
      }
    );
    set({ traineeApplications: newTraineeApplications });
  },

  updateStatue: {
    _id: null,
    statue: "",
  },

  updateTraineeApplication: async (e) => {
    e.preventDefault();

    const {
      updateStatue: { statue, _id },
      traineeApplications,
    } = TraineeApplicationStore.getState();

    // Send the update request
    const res = await axios.put(
      `http://localhost:4000/api/v1/traineeApplications/${_id}`,
      {
        statue,
      }
    );

    // Update state
    const newTraineeApplications = [...traineeApplications];
    const traineeApplicationIndex = traineeApplications.findIndex(
      (traineeApplication) => {
        return traineeApplication._id === _id;
      }
    );
    newTraineeApplications[traineeApplicationIndex] =
      res.data.traineeApplication;

    set({
      traineeApplications: newTraineeApplications,
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

  registerTraineeApplication: async (e) => {
    e.preventDefault();
    const { values, traineeApplications } = TraineeApplicationStore.getState();

    // add traineeApplication
    const res = await axios.post(
      "http://localhost:4000/api/v1/traineeApplications/registerTraineeApplication",
      values
    );
    set({
      traineeApplications: [
        ...traineeApplications,
        res.data.traineeApplication,
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

export default TraineeApplicationStore;
