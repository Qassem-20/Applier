import { create } from "zustand";
import axios from "axios";

const ReviewStore = create((set) => ({
  reviews: null,

  fetchReviews: async () => {
    // Fetch the reviews
    const res = await axios.get("/reviews", { withCredentials: true });
    // Set to state
    set({ reviews: res.data.reviews });
  },

  fetchReviewsCompany: async (_id) => {
    // Fetch the reviews
    const res = await axios.get("/api/v1/reviewsCompany/" + _id, {
      withCredentials: true,
    });
    // Set to state
    set({ reviews: res.data.reviews });
  },
  fetchReviewsMedical: async () => {
    // Fetch the reviews
    const res = await axios.get("/api/v1/reviewsMedical", {
      withCredentials: true,
    });
    // Set to state
    set({ reviews: res.data.reviews });
  },

  deleteReview: async (_id) => {
    await axios.delete("/api/v1/reviews/" + _id, {
      withCredentials: true,
    });

    const { reviews } = ReviewStore.getState();

    //update page;
    const newReviews = [...reviews].filter((review) => {
      return review._id !== _id;
    });
    set({ reviews: newReviews });
  },

  updateStatue: {
    _id: null,
    statue: "",
  },

  updateReview: async (e) => {
    e.preventDefault();

    const {
      updateStatue: { statue, _id },
      reviews,
    } = ReviewStore.getState();

    // Send the update request
    const res = await axios.put(
      `/api/v1/admins/hideReview/${_id}`,
      {
        statue,
      },
      { withCredentials: true }
    );

    // Update state
    const newReviews = [...reviews];
    const reviewIndex = reviews.findIndex((review) => {
      return review._id === _id;
    });
    newReviews[reviewIndex] = res.data.review;

    set({
      reviews: newReviews,
      updateType: {
        _id: null,
        statue: "",
      },
    });
  },

  values: {
    rate: "",
    description: "",
    company: "",
    medicalStudent: "",
  },

  registerReviewCompany: async () => {
    const { values } = ReviewStore.getState();

    // add review
    await axios.post("/api/v1/reviews/registerReviewCompany", values, {
      withCredentials: true,
    });
    set({
      values: {
        rate: "",
        description: "",
        company: "",
      },
    });
  },
  registerReviewMedical: async () => {
    const { values } = ReviewStore.getState();

    // add review
    await axios.post("/api/v1/reviews/registerReviewMedical", values, {
      withCredentials: true,
    });
    set({
      values: {
        rate: "",
        description: "",
        medicalStudent: "",
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

export default ReviewStore;
