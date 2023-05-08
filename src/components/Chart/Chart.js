import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const datapointValues = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  ); //object to number transform gareko ho , yesle chai array of numbers return garcha,,,, YESMA CHAI SELECTED YEAR MA BHAKO ITEMS HARU KO MONTHS MA KATI AMOUNT/PRICE CHA TYO DISPLAY HUNCHA

  console.log(datapointValues, 'This is from dataPointValues');

  const totalMaximum = Math.max(...datapointValues); //ARRAYS OF NUMBER BATA YESLE MAXIMUM AMOUNT/PRICE SELECT GARCHA, ... le garda chai aba max le 12 ota arguments receive garcha

  console.log(totalMaximum, 'This is from totalMaximum');

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
