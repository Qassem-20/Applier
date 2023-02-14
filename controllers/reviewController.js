import Review from '../models/Review.js';

const fetchReviews = async (req, res) => {

    const reviews = await Review.find();

      res.json({ reviews });
  };
  
  const fetchReview = async (req, res) => {
    const reviewId = req.params.id;

    const review = await Review.findById(reviewId);
    
    res.json({ review });
  };
  
  const createReview = async (req, res) => {
    const { name, email, password, type, phone } = req.body;
  
    const review = await Review.create({
      name,
      email,
      password,
      type,
      phone, 
    });
  
    res.json({ review });
  };
  
  const updateReview = async (req, res) => {
    const reviewId = req.params.id;
  
    const { type } = req.body;
  
    await Review.findByIdAndUpdate(reviewId, {
      type,
    });
  
    const review = await Review.findById(reviewId);
  
    res.json({ review });
  };
  
  const deleteReview = async (req, res) => {
    const reviewId = req.params.id;
  
    await Review.findByIdAndDelete( reviewId );
  
    res.json({ success: "Record deleted" });
  };
  
  export {
    fetchReviews,
    fetchReview,
    createReview,
    updateReview,
    deleteReview,
  };