import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = () => {
    return (
        <nav style={{ marginBottom: '30px' }} className='blue'>
        <div className="nav-wrapper">
          <a href="#" class="brand-logo">CalorieTracker</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#">Register</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
      </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
  };

  export default Navbar;