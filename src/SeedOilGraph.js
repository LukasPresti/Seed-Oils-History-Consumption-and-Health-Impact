import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
/*defined sample data */
const seedOilData = [
  { year: 1960, soybeanOil: 2.2, cornOil: 3.8, totalSeedOil: 6.0 },
  { year: 1970, soybeanOil: 5.0, cornOil: 6.0, totalSeedOil: 11.0 },
  { year: 1980, soybeanOil: 7.0, cornOil: 9.0, totalSeedOil: 16.0 },
  { year: 1990, soybeanOil: 10.0, cornOil: 12.0, totalSeedOil: 22.0 },
  { year: 2000, soybeanOil: 15.0, cornOil: 13.0, totalSeedOil: 28.0 },
  { year: 2010, soybeanOil: 25.5, cornOil: 14.6, totalSeedOil: 40.1 },
  { year: 2018, soybeanOil: 30.0, cornOil: 16.0, totalSeedOil: 46.0 }
];

const SeedOilGraph = () => {
  const [yearRange, setYearRange] = useState([1960, 2018]);

  const filteredData = seedOilData.filter(
    (data) => data.year >= yearRange[0] && data.year <= yearRange[1]
  );
/* state management for year slider */
  return (
    <div>
      {/* Year Range Slider. */}
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

      {/* Seed Oil Consumption Graph. Used Recharts' linecharts for visual */}
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
              const currentIndex = seedOilData.findIndex(item => item.year === data.year);
              const prevData = seedOilData[currentIndex - 1] || seedOilData[currentIndex];

              // Calculate the year-over-year changes
              const soybeanChange = data.soybeanOil - prevData.soybeanOil;
              const cornChange = data.cornOil - prevData.cornOil;

              return (
                <div style={{ background: '#fff', padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
                  <p><strong>{year}</strong></p>
                  <p>{`Soybean Oil: ${data.soybeanOil} lbs (Change: ${soybeanChange.toFixed(2)} lbs)`}</p>
                  <p>{`Corn Oil: ${data.cornOil} lbs (Change: ${cornChange.toFixed(2)} lbs)`}</p>
                  <p>{`Total Seed Oil: ${data.totalSeedOil} lbs`}</p>
                </div>
              );
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="soybeanOil" stroke="#8884d8" animationDuration={500} />
          <Line type="monotone" dataKey="cornOil" stroke="#82ca9d" animationDuration={500} />
          <Line type="monotone" dataKey="totalSeedOil" stroke="#ffc658" animationDuration={500} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SeedOilGraph;