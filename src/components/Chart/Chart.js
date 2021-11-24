import React from 'react';
import './Chart.css';
import _ from 'lodash';
import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
  const dataPointValues = _.map(dataPoints, (dataPoint) => dataPoint.value);
  // 배열에 있는 값을 꺼내기 위해 spread 연산자 사용..
  const totalMaximum = Math.max(...dataPointValues);
  console.log('totalMaximum', totalMaximum);

  return (
    <div className="chart">
      {_.map(dataPoints, (dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};

export default Chart;
