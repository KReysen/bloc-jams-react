import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/Landing.css'
const Landing = () => (

  <div id="landingpage">
  <img src="components/icymtn.JPG" alt="mountain" />
  <section className ="landing">
    <h1 className="hero-title">Turn the music up!</h1>

  <Row className="selling-points">
    <Col md={4} className="point">
      <h2 className="point-title">Choose your music</h2>
      <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
    </Col>
    <Col md={4} className="point">
      <h2 className="point-title">Unlimited, streaming, ad-free</h2>
      <p className="point-description">No arbitrary limits. No distractions.</p>
    </Col>
    <Col md={4} className="point">
      <h2 className="point-title">Mobile enabled</h2>
      <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>

    </Col>
  </Row>
  </section>
  </div>
);

export default Landing;
