import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const combinedData = [
  { year: 1960, seedOil: 6.0, obesityRate: 13.4, testosteroneLevel: null },
  { year: 1970, seedOil: 11.0, obesityRate: 20.0, testosteroneLevel: null },
  { year: 1980, seedOil: 16.0, obesityRate: 23.2, testosteroneLevel: 600 },
  { year: 1990, seedOil: 22.0, obesityRate: 30.5, testosteroneLevel: 550 },
  { year: 2000, seedOil: 28.0, obesityRate: 30.5, testosteroneLevel: 500 },
  { year: 2010, seedOil: 40.1, obesityRate: 35.0, testosteroneLevel: 450 },
  { year: 2018, seedOil: 46.0, obesityRate: 42.4, testosteroneLevel: 400 }
];

const CombinedGraph = () => {
  const [yearRange, setYearRange] = useState([1960, 2018]);

  const filteredData = combinedData.filter(
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

      {/* Graph with Dual Y-Axis */}
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="year" 
            label={{ 
              value: 'Year', 
              position: 'bottom', 
              offset: 0 
            }} 
          />
          
          {/* Left Y-Axis (Seed Oil & Obesity) */}
          <YAxis
            yAxisId="left"
            domain={[0, 50]} // Adjusted for seed oil (0–46) and obesity (0–42.4)
            stroke="#8884d8" // Purple to match seed oil line
            label={{ 
              value: 'Seed Oil (lbs) / Obesity Rate (%)', 
              angle: -90, 
              position: 'left', 
              offset: 10 
            }}
          />
          
          {/* Right Y-Axis (Testosterone) */}
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[300, 700]} // Adjusted for testosterone (400–600)
            stroke="#ff7300" // Orange to match testosterone line
            label={{ 
              value: 'Testosterone (ng/dL)', 
              angle: -90, 
              position: 'right', 
              offset: 10 
            }}
          />

          <Tooltip
            content={({ payload }) => {
              if (!payload || payload.length === 0) return null;
              const data = payload[0].payload;
              return (
                <div style={{ 
                  background: '#fff', 
                  padding: '10px', 
                  border: '1px solid #ddd', 
                  borderRadius: '8px' 
                }}>
                  <p><strong>{data.year}</strong></p>
                  <p style={{ color: '#8884d8' }}>{`Seed Oil: ${data.seedOil} lbs`}</p>
                  <p style={{ color: '#82ca9d' }}>{`Obesity Rate: ${data.obesityRate}%`}</p>
                  <p style={{ color: '#ff7300' }}>{`Testosterone: ${data.testosteroneLevel || 'N/A'} ng/dL`}</p>
                </div>
              );
            }}
          />

          <Legend 
            verticalAlign="top"
            formatter={(value) => (
              <span style={{ color: value === 'Testosterone' ? '#ff7300' : '#8884d8' }}>
                {value}
              </span>
            )}
          />

          {/* Seed Oil Line */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="seedOil"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 4 }}
          />

          {/* Obesity Line */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="obesityRate"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={{ r: 4 }}
          />

          {/* Testosterone Line */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="testosteroneLevel"
            stroke="#ff7300"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CombinedGraph;