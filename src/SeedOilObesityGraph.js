import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const seedOilData = [
  { year: 1960, soybeanOil: 2.2, cornOil: 3.8, totalSeedOil: 6.0 },
  { year: 1970, soybeanOil: 5.0, cornOil: 6.0, totalSeedOil: 11.0 },
  { year: 1980, soybeanOil: 7.0, cornOil: 9.0, totalSeedOil: 16.0 },
  { year: 1990, soybeanOil: 10.0, cornOil: 12.0, totalSeedOil: 22.0 },
  { year: 2000, soybeanOil: 15.0, cornOil: 13.0, totalSeedOil: 28.0 },
  { year: 2010, soybeanOil: 25.5, cornOil: 14.6, totalSeedOil: 40.1 },
  { year: 2018, soybeanOil: 30.0, cornOil: 16.0, totalSeedOil: 46.0 }
];

const obesityData = [
  { year: 1960, obesityRate: 13.4 },
  { year: 1988, obesityRate: 23.2 },
  { year: 1999, obesityRate: 30.5 },
  { year: 2000, obesityRate: 30.5 },
  { year: 2010, obesityRate: 35.0 },
  { year: 2018, obesityRate: 42.4 }
];

const CombinedGraph = () => {
  const [yearRange, setYearRange] = useState([1960, 2018]);

  const filteredSeedOilData = seedOilData.filter(
    (data) => data.year >= yearRange[0] && data.year <= yearRange[1]
  );

  const filteredObesityData = obesityData.filter(
    (data) => data.year >= yearRange[0] && data.year <= yearRange[1]
  );

  return (
    <div>
      <h1>Seed Oils, Obesity, and Health Risks</h1>

      {/* Seed Oil Section */}
      <section>
        <h2>Introduction to Seed Oils</h2>
        <p>
          Seed oils, derived from the seeds of various plants, have been used for centuries in cooking, medicine, and cosmetics.
          Their widespread adoption, particularly in the United States, began in the early 20th century when technology advanced to enable the mass production of oils from seeds like soybeans, corn, sunflower, and canola. These oils offered a more affordable and abundant alternative to animal fats like butter and lard, which were once the staples in cooking and food preparation.
        </p>
        <p>
          Today, seed oils are prevalent in the modern food industry, used not only in cooking but also as ingredients in processed foods, packaged snacks, and ready-made meals. However, their increased consumption in recent decades has sparked debates about their potential health impacts.
        </p>
      </section>

      {/* Seed Oil Consumption Rates */}
      <section>
        <h2>Seed Oil Consumption Rates Over Time</h2>
        <p>
          As shown in the graph, the consumption of seed oils in the U.S. has skyrocketed since the 1960s. What started as a modest 6 lbs per person in 1960 has grown to 46 lbs per person by 2018, a staggering increase of over 600%. This trend is largely due to the increasing use of seed oils in processed foods, which have become a mainstay in the American diet.
        </p>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={filteredSeedOilData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip
              content={({ payload, label }) => {
                if (!payload || payload.length === 0) return null;

                const data = payload[0].payload;
                const year = label;

                const currentIndex = seedOilData.findIndex(item => item.year === data.year);
                const prevData = seedOilData[currentIndex - 1] || seedOilData[currentIndex];

                const soybeanChange = data.soybeanOil - prevData.soybeanOil;
                const cornChange = data.cornOil - prevData.cornOil;

                return (
                  <div style={{ background: '#fff', padding: '10px', border: '1px solid #ddd' }}>
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
      </section>

      {/* Obesity Rates Section */}
      <section>
        <h2>Obesity Rates and Their Link to Seed Oils</h2>
        <p>
          The increase in seed oil consumption has coincided with rising obesity rates in the U.S. Over the last several decades, the obesity rate has surged from 13.4% in 1960 to over 42% in 2018. This parallel rise in seed oil consumption and obesity rates has led some researchers to explore a potential link between the two.
        </p>
        <p>
          One theory is that the high levels of omega-6 fatty acids found in many seed oils (like soybean and corn oils) may disrupt the balance of omega-3 and omega-6 fatty acids in the body. This imbalance can promote inflammation, a key contributor to obesity, insulin resistance, and other metabolic disorders.
        </p>
        <p>
          Our graph shows this correlation, where increased consumption of seed oils aligns with the rise in obesity rates over time. However, it is important to note that while seed oils may play a role, the increase in obesity is a complex issue involving other factors such as diet quality, physical inactivity, and genetic predispositions.
        </p>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={filteredObesityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip
              content={({ payload, label }) => {
                if (!payload || payload.length === 0) return null;

                const data = payload[0].payload;
                const year = label;

                const currentIndex = obesityData.findIndex(item => item.year === data.year);
                const prevData = obesityData[currentIndex - 1] || obesityData[currentIndex];

                const obesityChange = data.obesityRate - prevData.obesityRate;

                return (
                  <div style={{ background: '#fff', padding: '10px', border: '1px solid #ddd' }}>
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
      </section>

      {/* Heart Health Risks Section */}
      <section>
        <h2>Heart Health Risks Linked to Obesity</h2>
        <p>
          Obesity is a significant risk factor for several chronic diseases, with cardiovascular disease (CVD) being one of the most common and serious outcomes. As the body accumulates excess fat, particularly around the abdomen, it can lead to elevated blood pressure, high cholesterol levels, and an increased risk of heart attacks, strokes, and other heart-related complications.
        </p>
        <p>
          The excess consumption of omega-6 fatty acids from seed oils has been suggested to contribute to heart disease through its potential to increase inflammation in the body. Inflammation is known to damage blood vessels and increase the likelihood of plaque buildup in arteries, which can lead to atherosclerosis and other cardiovascular issues.
        </p>
        <p>
          While seed oils themselves are not the sole cause of heart disease, their overconsumption, especially in combination with other lifestyle factors such as a high-sugar diet and lack of exercise, may contribute to the growing rates of heart disease observed today.
        </p>
      </section>
    </div>
  );
};

export default CombinedGraph;
