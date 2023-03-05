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
    university: "",
    major: "",
    gpa: "",
    gpa_statue: "",
    concentrated_major: "",
    skills: "",
    cv: "",
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
        gpa_statue,
        concentrated_major,
        skills,
        cv,
        linkedIn_profile,
        experience,
        _id,
      },
      traineeApplications,
    } = TraineeApplicationStore.getState();

    // Send the update request
    const res = await axios.put(
      `http://localhost:4000/api/v1/traineeApplications/${_id}`,
      {
        university,
        major,
        gpa,
        gpa_statue,
        concentrated_major,
        skills,
        cv,
        linkedIn_profile,
        experience,
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
        university: "",
        major: "",
        gpa: "",
        gpa_statue: "",
        concentrated_major: "",
        skills: "",
        cv: "",
        linkedIn_profile: "",
        experience: "",
      },
    });
  },

  values: {
    university: "",
    major: "",
    gpa: "",
    gpa_statue: "",
    concentrated_major: "",
    skills: "",
    cv: "",
    linkedIn_profile: "",
    experience: "",
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
        university: "",
        major: "",
        gpa: "",
        gpa_statue: "",
        concentrated_major: "",
        skills: "",
        cv: "",
        linkedIn_profile: "",
        experience: "",
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
