import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const obesityData = [
  { year: 1960, obesityRate: 13.4 },
  { year: 1988, obesityRate: 23.2 },
  { year: 1999, obesityRate: 30.5 },
  { year: 2000, obesityRate: 30.5 },
  { year: 2010, obesityRate: 35.0 },
  { year: 2018, obesityRate: 42.4 }
];

const ObesityGraph = () => {
  const [yearRange, setYearRange] = useState([1960, 2018]);

  const filteredData = obesityData.filter(
    (data) => data.year >= yearRange[0] && data.year <= yearRange[1]
  );

  return (
    <div>
      {/* Year Range Slider */}
      <div style={{ marginBottom: '20px', padding: '0 20px' }}>
        <label>
          Select Year Range:
          <Slider
            range
            min={1960}
            max={2018}
            defaultValue={[1960, 2018]}
            value={yearRange}
            onChange={(value) => setYearRange(value)}
          />
        </label>
      </div>

      {/* Obesity Rate Graph */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip
            content={({ payload, label }) => {
              if (!payload || payload.length === 0) return null;

              const data = payload[0].payload;
              const year = label;

              // Find the previous data point based on the current year
              const currentIndex = obesityData.findIndex(item => item.year === data.year);
              const prevData = obesityData[currentIndex - 1] || obesityData[currentIndex];

              // Calculate the year-over-year change
              const obesityChange = data.obesityRate - prevData.obesityRate;

              return (
                <div style={{ background: '#fff', padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
                  <p><strong>{year}</strong></p>
                  <p>{`Obesity Rate: ${data.obesityRate}%`}</p>
                  <p>{`Change in Obesity Rate: ${obesityChange.toFixed(2)}%`}</p>
                </div>
              );
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="obesityRate" stroke="#8884d8" animationDuration={500} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ObesityGraph;