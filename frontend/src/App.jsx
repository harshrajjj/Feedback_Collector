import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import AdminView from './components/AdminView';
import ViewToggle from './components/ViewToggle';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import favicon from './assets/favicon.svg';

function App() {
  const [isAdminView, setIsAdminView] = useState(false);
  const [theme, toggleTheme] = useTheme();

  const toggleView = () => {
    setIsAdminView(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex items-center">
            <img src={favicon} alt="Feedback Collector Logo" className="h-10 w-10 mr-3" />
            <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Feedback Collector</h1>
          </div>
          <div className="flex items-center space-x-4">
            <ViewToggle isAdminView={isAdminView} toggleView={toggleView} />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </header>

        <main className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8 mb-10">
          {isAdminView ? <AdminView /> : <FeedbackForm />}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
