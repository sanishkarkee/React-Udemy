import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {
  // Calculation for how much chart bar should be filled
  let barFillHeight = '0%'; // string ma leko coz pachi yo CSS ma merge garincha

  if (props.maxValue > 0) {
    //Math.round() le decimal ko nearest value lincha,,, 5.90 = 6,, 5.05=5
    barFillHeight =
      Math.round((props.value / props.maxValue) * 100) + '%'; //yesle chai 0-100 % samma ko value dincha
  }
  // console.log(props.label, 'This is from props.labels');

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
