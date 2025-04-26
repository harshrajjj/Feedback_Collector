import React, { useState, useEffect } from 'react';
import { getFeedbacks } from '../api/feedbackApi';

/**
 * Admin view component to display all feedbacks (JSDoc)
 * @returns {JSX.Element} - Admin view
 */

const AdminView = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        setIsLoading(true);
        const data = await getFeedbacks();
        setFeedbacks(data);
        setError(null);
      } catch (err) {
        setError('Failed to load feedbacks. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  /**
   * Format date string
   * @param {string} dateString - ISO date string
   * @returns {string} - Formatted date
   */
  
  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-64 space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 dark:border-gray-700 border-t-blue-500 dark:border-t-blue-400"></div>
        <p className="text-gray-500 dark:text-gray-400 font-medium">Loading feedbacks...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-200 p-6 rounded-xl shadow-sm border border-red-100 dark:border-red-900/50 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="font-medium">{error}</span>
      </div>
    );
  }

  if (feedbacks.length === 0) {
    return (
      <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center flex flex-col items-center justify-center h-64">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">No feedbacks submitted yet</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Feedback submissions will appear here once users start providing their input.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2 text-blue-500 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
          All Feedbacks
        </h2>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
          {feedbacks.length} {feedbacks.length === 1 ? 'Entry' : 'Entries'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {feedbacks.map((feedback) => (
          <div
            key={feedback._id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition duration-200 hover:shadow-lg"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <span className="text-lg font-bold">{feedback.fullName.charAt(0).toUpperCase()}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {feedback.fullName}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {feedback.email}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md">
                  {feedback.timestamp ? formatDate(feedback.timestamp) : 'No date'}
                </span>
              </div>

              <div className="mt-4 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {feedback.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminView;
