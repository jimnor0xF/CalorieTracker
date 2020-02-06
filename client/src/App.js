import React, { Fragment, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import CalorieItems from './components/calorie-items/CalorieItems';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <div className='App'>
      <Navbar />
      <CalorieItems />
    </div>
  );
};

export default App;
