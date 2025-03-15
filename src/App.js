import React from 'react';
import './styles.css';
import SeedOilGraph from './SeedOilGraph';
import ObesityGraph from './ObesityGraph';
import TestosteroneGraph from './TestosteroneGraph';
import CombinedGraph from './CombineGraph';
import { Container, Row, Col, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      {/* Sticky Navigation Bar */}
      <Nav className="sticky-nav" variant="pills">
        <Nav.Item>
          <Nav.Link href="#history">History</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#seed-oil">Seed Oil</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#obesity">Obesity</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#testosterone">Testosterone</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#combined">Combined</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#conclusion">Conclusion</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Hero Section */}
      <div className="hero-section">
        <h1>The Hidden Impact of Seed Oils</h1>
        <p>
          Explore the correlation between seed oil consumption, obesity rates, and declining testosterone levels over time. Discover the data and its implications for health and society.
        </p>
      </div>

      <Container>
        {/* History of Seed Oils Section */}
        <Row id = "history">
          <Col>
            <div className="section">
              <h2>A Brief History of Seed Oils</h2>
              <p>
                Seed oils, such as soybean oil, corn oil, and canola oil, have become a staple in modern diets. However, their rise to prominence is a relatively recent phenomenon in human history. Before the 20th century, traditional fats like butter, lard, and olive oil were the primary sources of dietary fat.
              </p>
              <p>
                <strong>Original Purpose of Seed Oils:</strong> Before being marketed as cooking ingredients, seed oils were primarily used for industrial purposes. For example:
              </p>
              <ul>
                <li>
                  <strong>Lubricants:</strong> Seed oils were used as lubricants for machinery and engines due to their viscosity and stability.
                </li>
                <li>
                  <strong>Soaps and Paints:</strong> They were key ingredients in the production of soaps, paints, and varnishes because of their ability to form durable coatings.
                </li>
                <li>
                  <strong>Fuel:</strong> Some seed oils, like castor oil, were even used as fuel for lamps and early diesel engines.
                </li>
              </ul>
              <p>
                The transition of seed oils from industrial use to a dietary staple began in the early 20th century, driven by several factors:
              </p>
              <ul>
                <li>
                  <strong>Industrialization:</strong> The development of industrial extraction methods made it possible to produce large quantities of seed oils at low cost.
                </li>
                <li>
                  <strong>Health Recommendations:</strong> In the mid-20th century, health organizations began promoting seed oils as a "heart-healthy" alternative to saturated fats like butter and lard. This was based on the now-controversial belief that polyunsaturated fats (found in seed oils) could reduce the risk of heart disease.
                </li>
                <li>
                  <strong>Food Industry Adoption:</strong> Seed oils became a key ingredient in processed foods due to their low cost, long shelf life, and versatility. They are now found in everything from salad dressings to fried foods and baked goods.
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Seed Oil Graph */}
        <Row id = "seed-oil">
          <Col>
            <div className="graph-section">
              <h2>Seed Oil Consumption Over Time</h2>
              <SeedOilGraph />
            </div>
          </Col>
        </Row>

        {/* Obesity Graph */}
        <Row id = "obesity">
          <Col>
            <div className="graph-section">
              <h2>Obesity Rates Over Time</h2>
              <ObesityGraph />
            </div>
          </Col>
        </Row>

        {/* Testosterone Graph */}
        <Row id = "testosterone">
          <Col>
            <div className="graph-section">
              <h2>Testosterone Levels in Men Over Time</h2>
              <TestosteroneGraph />
            </div>
          </Col>
        </Row>

        {/* Combined Graph */}
        <Row>
          <Col id = "combined">
            <div className="graph-section">
              <h2>Seed Oil Consumption, Obesity Rates, and Testosterone Levels (Combined)</h2>
              <CombinedGraph />
            </div>
          </Col>
        </Row>

        {/* Conclusion Section */}
        <Row id = "conclusion">
          <Col>
            <div className="analysis-section">
              <h2>Conclusion: The Broader Implications</h2>
              <p>
                The data presented here reveals a striking correlation between the rise in seed oil consumption, the increase in obesity rates, and the decline in testosterone levels in men. While correlation does not imply causation, the trends suggest a potential link between these factors.
              </p>
              <p>
                Seed oils, particularly soybean and corn oils, have become ubiquitous in the modern diet, largely due to their use in processed foods. These oils are high in polyunsaturated fats, which have been linked to inflammation, metabolic dysfunction, and hormonal imbalances. The decline in testosterone levels in men over the past few decades may be partially attributed to the widespread consumption of these oils.
              </p>
              <p>
                Lower testosterone levels are associated with a range of health issues, including reduced muscle mass, increased body fat, and decreased libido. Moreover, lower testosterone levels have been linked to changes in behavior, including reduced aggression and increased docility. This raises important questions about the broader societal implications of these trends.
              </p>
              <p>
                While further research is needed to fully understand the mechanisms at play, the data suggests that the rise in seed oil consumption may have far-reaching consequences for public health and societal dynamics. It is crucial to consider the potential impact of dietary changes on both individual health and broader social structures.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="analysis-section">
              <h2>References</h2>
              <ul>
                <li>
                U.S. Department of Agriculture. (2023). "Seed Oil Consumption Data."
                Retrieved from <a href="https://www.ers.usda.gov">USDA Economic Research Service</a>
                </li>
                <li>
                Centers for Disease Control and Prevention. (2023). "Obesity Trends."
                Retrieved from <a href="https://www.cdc.gov/obesity/data/index.html">CDC Obesity Data</a>
                </li>
                <li>
                Travison, T.G. et al. (2007). "Population-Level Decline in Serum Testosterone Levels."
                <em>Journal of Clinical Endocrinology & Metabolism</em>, 92(1), 196–202.
                </li>
                <li>
                Recharts Library. (2023). Documentation. Retrieved from 
                <a href="https://recharts.org">https://recharts.org</a>
                </li>
                <li>
                 React-Bootstrap. (2023). Components. Retrieved from 
                 <a href="https://react-bootstrap.github.io">https://react-bootstrap.github.io</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;