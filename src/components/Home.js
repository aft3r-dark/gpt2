import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
      {/* This Link navigates to the /about route */}
      <Link to="/about">Go to About Us</Link>
    </div>
  );
};

export default Home;