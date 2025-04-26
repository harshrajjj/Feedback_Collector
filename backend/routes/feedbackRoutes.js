const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');


// Submit a new feedback
router.post('/submit-feedback', feedbackController.submitFeedback);

// Get all feedbacks
router.get('/feedbacks', feedbackController.getAllFeedbacks);

module.exports = router;
