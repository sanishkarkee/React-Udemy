import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {
  // Calculation for how much chart bar should be filled
  let barFillHeight = '0%'; // string ma leko coz pachi yo CSS ma merge garincha

  if (props.max > 0) {
    barFillHeight = (props.value / props.maxValue) * 100 + '%';
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}></div>
        {/*  By how much we fill the bar depends upon the data(VALUE props in Chart.js) we are receiving */}
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
