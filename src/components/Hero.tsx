import React from 'react';
import { Container } from 'react-bootstrap';

const Hero: React.FC = () => {
  return (
    <section className="hero-section text-center">
      <Container>
        <h1 className="display-4">Language-based Engineering: A Comprehensive Approach to Software Analysis and Hardening</h1>
        <div>
          <a href="https://github.com/hyunsooda/lbe" target="_blank" className="icon-button me-2 secondary-button">
            <img src="/images/github.svg" alt="GitHub Icon" className="icon-button-img" />
            <span>Code</span>
          </a>
          <a href="/asset/book.pdf" target="_blank" className="icon-button primary-button">
            <img src="/images/book.svg" alt="Book Icon" className="icon-button-img" />
            <span>Download Book</span>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;