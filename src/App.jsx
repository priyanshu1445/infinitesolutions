import React, { useEffect } from 'react';
import HomePage from './homepage/HomePage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import CustomNavbar from './homepage/CustomNavbar';

const App = () => {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
       <CustomNavbar />
      <HomePage />
    </div>
  );
};

export default App;
