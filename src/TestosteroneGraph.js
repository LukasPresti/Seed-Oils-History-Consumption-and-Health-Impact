import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const testosteroneData = [
  { year: 1980, testosteroneLevel: 600 },
  { year: 1990, testosteroneLevel: 550 },
  { year: 2000, testosteroneLevel: 500 },
  { year: 2010, testosteroneLevel: 450 },
  { year: 2020, testosteroneLevel: 400 }
];

const TestosteroneGraph = () => {
  const [yearRange, setYearRange] = useState([1980, 2020]);

  const filteredData = testosteroneData.filter(
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
            min={1980}
            max={2020}
            defaultValue={[1980, 2020]}
            value={yearRange}
            onChange={(value) => setYearRange(value)}
          />
        </label>
      </div>

      {/* Testosterone Level Graph */}
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
              const currentIndex = testosteroneData.findIndex(item => item.year === data.year);
              const prevData = testosteroneData[currentIndex - 1] || testosteroneData[currentIndex];

              // Calculate the year-over-year change
              const testosteroneChange = data.testosteroneLevel - prevData.testosteroneLevel;

              return (
                <div style={{ background: '#fff', padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
                  <p><strong>{year}</strong></p>
                  <p>{`Testosterone Level: ${data.testosteroneLevel} ng/dL`}</p>
                  <p>{`Change in Testosterone Level: ${testosteroneChange.toFixed(2)} ng/dL`}</p>
                </div>
              );
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="testosteroneLevel" stroke="#ff7300" animationDuration={500} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TestosteroneGraph;