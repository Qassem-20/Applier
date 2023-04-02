import Review from "../models/review.js";

const fetchReviews = async (req, res) => {
  const reviews = await Review.find();

  res.json({ reviews });
};
const fetchReviewsCompany = async (req, res) => {
  const company = req.params.company;

  const reviews = await Review.find({company});

  res.json({ reviews });
};
const fetchReviewsMedical = async (req, res) => {
  try {

  const medical = req.params.medical;

  const reviews = await Review.find({ medical });
  
  if (!reviews) {
    return res.status(404).json({ message: 'No reviews found for the specified product' });
  }

  res.status(200).json(reviews);
} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Internal server error' });
}
 
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


const createReviewCompany = async (req, res) => {
  const { company, rate, description } = req.body;

  const review = await Review.create({
    rate,
    description,
    company,
    isReported:'no',
    statue:"shown",
    consumer: req.consumer._id,
  });

  res.json({ review });
};
const createReviewMedical = async (req, res) => {
  const { medical,rate, description } = req.body;

  const review = await Review.create({
    rate,
    description,
    isReported:'no',
    statue:"shown",
    medical,
    consumer: req.consumer._id,
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
  fetchReviewsCompany,
  fetchReviewsMedical,
  createReviewCompany,
  createReviewMedical,
  deleteReview,
  hideReview,
  reportReview,
  sortReview,
};
