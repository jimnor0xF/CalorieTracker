import React, { useEffect } from 'react';

const CalorieItems = () => {
  return (
    <ul className='collapsible'>
      <li>
        <div className='collapsible-header'>
          <i className='material-icons'>expand_more</i>
          Banana
          <span className='new badge' data-badge-caption=''>
            105
          </span>
          <i className='material-icons grey-text'>delete</i>
        </div>
        <div className='collapsible-body'>
          <span className='black-text'>Calories: 105</span> <br />
          <span className='black-text'>Fat: 0.39g</span>

        </div>
      </li>
      <li>
        <div className='collapsible-header'>
          <i className='material-icons'>expand_more</i>
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
