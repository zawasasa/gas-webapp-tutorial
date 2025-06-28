
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content'; // Default content for home
import Footer from './components/Footer';
import Chapter1 from './pages/Chapter1';
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
