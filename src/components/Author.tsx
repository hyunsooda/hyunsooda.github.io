import React from 'react';
import { Container } from 'react-bootstrap';

const Author: React.FC = () => {
  return (
    <section id="author" style={{ padding: '4rem 0', backgroundColor: '#f8f9fa' }}>
      <Container className="text-center">
        <h2>About the Author</h2>
        <h4>Hyunsoo Shin (신현수) / Software Engineer / Republic of Korea</h4>
      </Container>
    </section>
  );
};

export default Author;