import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SimpleBarChart = (props) => {
  const [datapoints, setDatapoints] = useState([]);
  const [aggregatedData, setAggregatedData] = useState([]);

  useEffect(() => {
    setDatapoints(props.datapoints);
  }, [props.datapoints]);

  useEffect(() => {
    const aggregated = datapoints.reduce((acc, datapoint) => {
      const existing = acc.find(item => item.topic === datapoint.topic);
      if (existing) {
        existing.intensity += datapoint.intensity;
      } else {
        acc.push({
          topic: datapoint.topic,
          intensity: datapoint.intensity,
        });
      }
      return acc;
    }, []);
    setAggregatedData(aggregated);
  }, [datapoints]);

  return (
    <div>
      <h2>Simple Bar Chart | Intensity Distribution</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={aggregatedData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="topic" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="intensity" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
