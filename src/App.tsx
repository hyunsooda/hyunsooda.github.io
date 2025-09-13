import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Author from './components/Author';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Author />
      </main>
      <Footer />
    </div>
  );
};

export default App;