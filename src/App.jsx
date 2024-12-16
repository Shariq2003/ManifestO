import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Encryption from './pages/Encryption';
import Decryption from './pages/Decryption';

function App() {
  const [activeTab, setActiveTab] = useState('welcome');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/encryption') {
      setActiveTab('encryption');
    } else if (path === '/decryption') {
      setActiveTab('decryption');
    } else {
      setActiveTab('welcome');
    }
  }, [window.location.pathname]);

  return (
    <>
      <div className="App flex flex-row">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className='m-auto w-full max-w-4xl'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/encryption" element={<Encryption />} />
            <Route path="/decryption" element={<Decryption />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
