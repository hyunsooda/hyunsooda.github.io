import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: '4rem 0', backgroundColor: 'white' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <h2>About the Book</h2>
            <p className="mt-4 about-body-text">
              This book explores a series of common program bugs that many of us have likely encountered while coding. At its core, the goal is to identify bugs — from a security perspective — <em>using PL technologies</em>.
            </p>
          </Col>
          <Col md={5} className="text-center">
            <Image src="/asset/lambda.png" alt="Lambda Symbol" fluid rounded />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
