import React, { useEffect, useState } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const ScatterChartWithCells = (props) => {
  const [datapoints, setDatapoints] = useState([]);

  useEffect(() => {
    setDatapoints(props.datapoints)
  }, [props.datapoints]);



  const getColor = (value) => {
    if (value > 80) return '#ff4d4f';
    if (value > 60) return '#ff7a45';
    if (value > 40) return '#ffa940';
    if (value > 20) return '#ffec3d';
    return '#73d13d';
  };

  return (
    <div>
      <h2>Scatter Chart with cells | Intensity vs Likelihood</h2>
      <br />
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="category" dataKey="topic" name="Topic" />
          <YAxis type='number' dataKey="intensity" name="Intensity" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Intensity" data={datapoints} fill="#8884d8">
            {datapoints.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.intensity)} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScatterChartWithCells;