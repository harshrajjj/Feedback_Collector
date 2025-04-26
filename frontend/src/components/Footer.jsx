import React from 'react';

/**
 * Footer component
 * @returns {JSX.Element} - Footer with developer information
 */
const Footer = () => {
  return (
    <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400 transition duration-200 border-t border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <p className="font-medium"> Developed by <strong>Harsh Kumar</strong></p>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>Submitted for Feedback Collector Assignment</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
