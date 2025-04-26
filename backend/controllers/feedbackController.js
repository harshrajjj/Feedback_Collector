const Feedback = require('../models/Feedback');

// Submit a new feedback
exports.submitFeedback = async (req, res) => {
  try {
    const { fullName, email, message, timestamp } = req.body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create new feedback
    const newFeedback = new Feedback({
      fullName,
      email,
      message,
      timestamp: timestamp || new Date()
    });

    // Save to database
    await newFeedback.save();

    res.status(201).json({ success: true, feedback: newFeedback });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


// Get all feedbacks
exports.getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ timestamp: -1 });
    res.json(feedbacks);
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
