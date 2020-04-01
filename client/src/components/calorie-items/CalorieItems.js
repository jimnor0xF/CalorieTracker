import React, { useEffect } from 'react';

const CalorieItems = () => {
  return (
    <div className="container">
      <table className="highlight">
        <thead>
          <tr className="blue lighten-5">
              <th>Item Name</th>
              <th>Calories</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Banana</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Cookie</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Pizza</td>
            <td>1000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalorieItems;
