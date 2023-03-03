import { create } from "zustand";
import axios from "axios";

const ReviewStore = create((set) => ({
  reviews: null,

  fetchReviews: async () => {
    // Fetch the reviews
    const res = await axios.get("/reviews");
    // Set to state
    set({ reviews: res.data.reviews });
  },

  deleteReview: async (_id) => {
    const res = await axios.delete(
      "/reviews/" + _id
    );

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
      `/admins/hideReview/:id${_id}`,
      {
        statue,
      }
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
  },

  registerReview: async (e) => {
    e.preventDefault();
    const { values, reviews } = ReviewStore.getState();

    // add review
    const res = await axios.post(
      "/reviews/registerReview",
      values
    );
    set({
      reviews: [...reviews, res.data.review],
      values: {
        rate: "",
        description: "",
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
