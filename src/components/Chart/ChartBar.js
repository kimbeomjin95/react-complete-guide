import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {
  const { label, value, maxValue } = props;

  let barFillHeight = '0%';

  if (maxValue > 0) {
    console.log('maxValue', maxValue);
    barFillHeight = Math.round((value / maxValue) * 100) + '%';
  }
  console.log('barFillHeight', barFillHeight);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }} />
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
