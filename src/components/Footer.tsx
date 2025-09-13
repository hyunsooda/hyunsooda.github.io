import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '2rem 0', backgroundColor: '#343a40', color: 'white' }}>
      <Container className="text-center">
        <p>&copy; 2025 Language-based Engineering. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;