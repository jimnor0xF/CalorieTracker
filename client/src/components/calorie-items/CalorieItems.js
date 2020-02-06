import React, { useEffect } from 'react';

const CalorieItems = () => {
  return (
    <ul className='collapsible'>
      <li>
        <div className='collapsible-header'>
          <i className='material-icons'>filter_drama</i>
          First
          <span className='new badge' data-badge-caption=''>
            100
          </span>
        </div>
        <div className='collapsible-body'>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
      <li>
        <div className='collapsible-header'>
          <i className='material-icons'>place</i>
          Second
          <span className='badge'>1</span>
        </div>
        <div className='collapsible-body'>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
    </ul>
  );
};

export default CalorieItems;
