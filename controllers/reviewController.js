import Review from "../models/Review.js";
import mongoose from "mongoose";

const fetchReviews = async (req, res) => {
  try {
    const reviews = await Review.find();

    res.json({ reviews });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
const fetchReportedReviews = async (req, res) => {
  try {
    const reportedReviews = await Review.find({ isReported: "yes" });
    return res.status(200).json(reportedReviews);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};
const fetchCompanyReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ company: req.company._id });

    res.json({ reviews });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
const fetchMedicalReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      medicalStudent: req.medicalStudent._id,
    });
    res.json({ reviews });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
const fetchReviewsCompany = async (req, res) => {
  try {
    const company = mongoose.Types.ObjectId(req.params.company);
    const reviews = await Review.find({ company });

    res.json({ reviews });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
const fetchReviewsMedical = async (req, res) => {
  try {
    const medicalStudent = mongoose.Types.ObjectId(req.params.medical);

    const reviews = await Review.find({ medicalStudent });
    res.json({ reviews });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
const fetchReview = async (req, res) => {
  try {
    const reviewId = req.params.id;

    const review = await Review.findById(reviewId);

    res.json({ review });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const sortReview = async (req, res) => {
  try {
    const review = await Review.find().sort({ rate: 1 });

    res.json({ review });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const createReviewCompany = async (req, res) => {
  try {
    const { company, rate, description } = req.body;

    const review = await Review.create({
      rate,
      description,
      company,
      isReported: "no",
      statue: "shown",
      consumer: req.consumer._id,
    });

    res.json({ review });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
const createReviewMedical = async (req, res) => {
  try {
    const { medicalStudent, rate, description } = req.body;

    const review = await Review.create({
      rate,
      description,
      isReported: "no",
      statue: "shown",
      medicalStudent,
      consumer: req.consumer._id,
    });

    res.json({ review });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
const hideReview = async (req, res) => {
  try {
    const reviewId = req.params.id;

    const { statue } = req.body;

    await Review.findByIdAndUpdate(reviewId, {
      statue,
    });

    const review = await Review.findById(reviewId);

    res.json({ review });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const reportReview = async (req, res) => {
  try {
    const reviewId = req.params.id;

    const { isReported } = req.body;

    await Review.findByIdAndUpdate(reviewId, {
      isReported,
    });

    const review = await Review.findById(reviewId);

    res.json({ review });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;

    await Review.findByIdAndDelete(reviewId);

    res.json({ success: "Record deleted" });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export {
  fetchReviews,
  fetchReview,
  fetchReviewsCompany,
  fetchReviewsMedical,
  createReviewCompany,
  createReviewMedical,
  fetchCompanyReviews,
  fetchMedicalReviews,
  deleteReview,
  fetchReportedReviews,
  hideReview,
  reportReview,
  sortReview,
};
