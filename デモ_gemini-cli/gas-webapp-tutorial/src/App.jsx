import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content'; // Default content for home
import Footer from './components/Footer';
import Chapter1 from './pages/Chapter1';
import Chapter2 from './pages/Chapter2'; // Import Chapter2
import './App.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '#chapter1':
        return <Chapter1 />;
      case '#chapter2': // Add Chapter2 to routing
        return <Chapter2 />;
      default:
        return <Content />;
    }
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}

export default App;