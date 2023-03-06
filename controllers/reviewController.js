import Review from "../models/review.js";

const fetchReviews = async (req, res) => {
  const reviews = await Review.find();

  res.json({ reviews });
};

const fetchReview = async (req, res) => {
  const reviewId = req.params.id;

  const review = await Review.findById(reviewId);

  res.json({ review });
};



const sortReview = async (req, res) => {
  const review = await Review.find().sort({ rate: 1 });

  res.json({ review });
};


const createReview = async (req, res) => {
  const { rate, description } = req.body;

  const review = await Review.create({
    rate,
    description,
  });

  res.json({ review });
};

const hideReview = async (req, res) => {
  const reviewId = req.params.id;

  const { statue } = req.body;

  await Review.findByIdAndUpdate(reviewId, {
    statue,
  });

  const review = await Review.findById(reviewId);

  res.json({ review });
};

const reportReview = async (req, res) => {
  const reviewId = req.params.id;

  const { isReported } = req.body;

  await Review.findByIdAndUpdate(reviewId, {
    isReported,
  });

  const review = await Review.findById(reviewId);

  res.json({ review });
};

const deleteReview = async (req, res) => {
  const reviewId = req.params.id;

  await Review.findByIdAndDelete(reviewId);

  res.json({ success: "Record deleted" });
};

export {
  fetchReviews,
  fetchReview,
  createReview,
  deleteReview,
  hideReview,
  reportReview,
  sortReview,
};
