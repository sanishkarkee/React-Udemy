import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const datapointValues = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  ); //object to number transform gareko ho , yesle chai array of numbers return garcha
  const totalMaximum = Math.max(...datapointValues); //arrays of number bata yesle maximum number select garcha, ... le     garda chai aba max le 12 ota arguments receive garcha
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          //ChartBar le chai value-prop receive garcha ( .map le  key/value/maxValue/label recevie garcha ani ChatBar component ma pathaucha )
          key={dataPoint.label} //we used label instead of id coz label harek items ko different huncha
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
