import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

function EnergyInsights(props) {
  const [dataByTopic, setDataByTopic] = useState([]);

  useEffect(() => {
    if (props.datapoints.length > 0) {
      const data = props.datapoints.reduce((acc, datapoint) => {
        const existing = acc.find(item => item.topic === datapoint.topic);
        if (existing) {
          existing.value += 1;
        } else {
          acc.push({ topic: datapoint.topic, value: 1 });
        }
        return acc;
      }, []);

      setDataByTopic(data.slice(0, 20));
    }
  }, [props.datapoints]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA4F4F', '#FFBBFF', '#884F8B'];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };



  const bgStyle = {
    background: 'pink',

  }

  return (
    <div style={bgStyle}>
      <h2>Energy Insights</h2>
      <br />
      <ResponsiveContainer width="100%" height={400} >
        <PieChart>
          <Pie
            data={dataByTopic}
            dataKey="value"
            nameKey="topic"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label={renderCustomizedLabel}
          >
            {dataByTopic.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <LabelList dataKey="topic" position="outside" />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div >
  );
}

export default EnergyInsights;
