import { create } from "zustand";
import axios from "axios";

const TraineeApplicationStore = create((set) => ({
  traineeApplications: null,

  fetchTraineeApplications: async () => {
    // Fetch the traineeApplications
    const res = await axios.get("api/v1/applications");
    // Set to state
    set({ traineeApplications: res.data.traineeApplications });
  },

  deleteTraineeApplication: async (_id) => {
    try {
      await axios.delete("api/v1/applications/" + _id, {
        withCredentials: true,
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
      // handle error here
    }
  },

  updateStatue: {
    _id: null,
    university: "",
    major: "",
    gpa: "",
    degree: "",
    concentrated_major: "",
    skills: "",

    linkedIn_profile: "",
    experience: "",
  },

  updateTraineeApplication: async (e) => {
    e.preventDefault();

    const {
      updateStatue: {
        university,
        major,
        gpa,
        degree,
        concentrated_major,
        skills,
        linkedIn_profile,
        experience,
        _id,
      },
      traineeApplications,
    } = TraineeApplicationStore.getState();

    // Send the update request
    const res = await axios.put(
      `api/v1/traineeApplications/${_id}`,
      {
        university,
        major,
        gpa,
        degree,
        concentrated_major,
        skills,

        linkedIn_profile,
        experience,
      },
      { withCredentials: true }
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
        statue: "",
      },
    });
  },

  values: {
    statue: "",
  },

  registerTraineeApplication: async () => {
    const { values } = TraineeApplicationStore.getState();

    // add traineeApplication
    await axios.post(
      "api/v1/traineeApplications/registerTraineeApplications",
      values,
      { withCredentials: true }
    );
    set({
      values: {
        statue: "",
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
