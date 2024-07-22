import React, { useEffect, useState } from 'react';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const SimpleRadarChart = (props) => {
  const [datapoints, setDatapoints] = useState([]);

  useEffect(() => {
    if (props.datapoints && props.datapoints.length > 0) {
      setDatapoints(props.datapoints);
      console.log(datapoints)
    } else {
      setDatapoints([]);
    }
  }, [props.datapoints]);


  const aggregatedData = datapoints.reduce((acc, datapoint) => {
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


  const limitedData = aggregatedData.slice(0, 20);

  return (
    <div>
      <h2>Simple Radar Chart | Intensity by Topic</h2>
      <br />
      <br />
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={limitedData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="topic" />
          <PolarRadiusAxis angle={30} domain={[0, Math.max(...limitedData.map(data => data.intensity))]} />
          <Tooltip />
          <Radar name="Intensity" dataKey="intensity" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div >
  );
}


export default SimpleRadarChart;