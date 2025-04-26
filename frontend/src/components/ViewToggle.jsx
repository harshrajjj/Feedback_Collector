import React from 'react';

/**
 * View toggle component (JSDoc)
 * @param {Object} props - Component props
 * @param {boolean} props.isAdminView - Whether admin view is active
 * @param {Function} props.toggleView - Function to toggle view
 * @returns {JSX.Element} - View toggle button
 */

const ViewToggle = ({ isAdminView, toggleView }) => {
  return (
    <button
      onClick={toggleView}
      className="flex items-center justify-center px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 shadow-sm border border-gray-200 dark:border-gray-700"
      aria-label={isAdminView ? "Switch to User View" : "Switch to Admin View"}
    >
      {isAdminView ? (
        <div className="flex items-center">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-md mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <span>Switch to User View</span>
        </div>
      ) : (
        <div className="flex items-center">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-md mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <span>Switch to Admin View</span>
        </div>
      )}
    </button>
  );
};

export default ViewToggle;
