/**
 * Submit feedback to the server
 * @param {Object} feedbackData - The feedback data to submit
 * @returns {Promise} - The response from the server
 */
export const submitFeedback = async (feedbackData) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKENED_URL}/submit-feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit feedback');
    }
    return await response.json();

  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error;
  }
};

/**
 * Get all feedbacks from the server
 * @returns {Promise} - The response from the server
 */

export const getFeedbacks = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKENED_URL}/feedbacks`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch feedbacks');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    throw error;
  }
};
