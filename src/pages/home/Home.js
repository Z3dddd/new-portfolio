import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-logo">FORMA</h1>
        <nav className="home-nav">
          <a href="#homes">Homes</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className="home-gallery">
        <div className="gallery-col">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Sample 1" />
        </div>
        <div className="gallery-col">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Sample 2" />
        </div>
      </main>
    </div>
  );
};

export default Home; 