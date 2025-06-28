import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content'; // Default content for home
import Footer from './components/Footer';
import Chapter1 from './pages/Chapter1';
import Chapter2 from './pages/Chapter2';
import Chapter3 from './pages/Chapter3';
import Chapter4 from './pages/Chapter4';
import Chapter5 from './pages/Chapter5';
import Chapter6 from './pages/Chapter6'; // Import Chapter6
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
      case '#chapter2':
        return <Chapter2 />;
      case '#chapter3':
        return <Chapter3 />;
      case '#chapter4':
        return <Chapter4 />;
      case '#chapter5':
        return <Chapter5 />;
      case '#chapter6': // Add Chapter6 to routing
        return <Chapter6 />;
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