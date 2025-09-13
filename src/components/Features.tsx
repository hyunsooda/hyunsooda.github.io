import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Features: React.FC = () => {
  const chapters = [
    {
      title: "Ch1. Coverage",
      references: [
        { name: "Hardhat Coverage", url: "https://hardhat.org/hardhat2/redirect?r=%2Fhardhat-runner%2Fdocs%2Fguides%2Ftest-contracts" },
      ],
    },
    {
      title: "Ch2. Buffer Overrun: Address Sanitizer",
      references: [
        { name: "AddressSanitizer: A Fast Address Sanity Checker", url: "https://www.usenix.org/system/files/conference/atc12/atc12-final39.pdf" },
      ],
    },
    {
      title: "Ch3. Fuzzing",
      references: [
        { name: "AFL", url: "https://github.com/google/AFL/blob/master/docs/technical_details.txt" },
      ],
    },
    {
      title: "Ch4. Symbolic Execution",
      references: [
        { name: "KLEE", url: "https://klee-se.org/" },
      ],
    },
    {
      title: "Ch5. Delta Debugging",
      references: [
        { name: "Simplifying and Isolating Failure-Inducing Input", url: "https://www.cs.purdue.edu/homes/xyzhang/fall07/Papers/delta-debugging.pdf" },
        { name: "Yesterday, my program worked. Today, it does not. Why?", url: "https://dl.acm.org/doi/10.1145/318774.318946" },
      ],
    },
    {
      title: "Ch6. LLM-based Synthesis",
      references: [
        { name: "Fuzz4All: Universal Fuzzing with Large Language Models", url: "https://fuzz4all.github.io/" },
      ],
    },
    {
      title: "Ch7. Data Race Detector: Thread Sanitizer",
      references: [
        { name: "Time, Clocks, and the Ordering of Events in a Distributed System", url: "https://lamport.azurewebsites.net/pubs/time-clocks.pdf" },
        { name: "Eraser: A Dynamic Data Race Detector for Multithreaded Programs", url: "https://dl.acm.org/doi/pdf/10.1145/265924.265927" },
      ],
    },
  ];

  return (
    <section id="features" style={{ padding: '4rem 0' }}>
      <Container>
        <div className="text-center">
          <h2 className="mb-4">Contents</h2>
          <p className="contents-intro-text">
            This book explores dynamic analysis and hardening in the context of software security and engineering.
          </p>
        </div>
        {chapters.map((chapter, index) => (
          <Row key={index} className="py-3 border-bottom align-items-start">
            <Col md={4} className="enlarged-text">
              <h5 className="mt-0">{chapter.title}</h5>
            </Col>
            <Col md={8} className="enlarged-text">
              <strong className="reference-label">{chapter.references.length > 1 ? 'References' : 'Reference'}:</strong>
              <ul className="list-unstyled reference-list">
                {chapter.references.map((ref, refIndex) => (
                  <li key={refIndex}>
                    - <a href={ref.url} target="_blank" rel="noopener noreferrer">
                      {ref.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Features;
