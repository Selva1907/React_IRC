
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About Us:</h1>
        <p>Welcome to FrutiStore, where freshness meets quality in the world of fruits and vegetables. We take pride in delivering nature's finest produce directly to your doorstep, ensuring that every bite is a burst of flavor and nutrition.</p>
      </div>

      <div className="about-card">
        <h1>Our Story:</h1>
        <p>At [Your Company Name], our journey began with a simple yet profound idea: to make fresh, wholesome fruits and vegetables accessible to everyone. What started as a humble initiative has now blossomed into a dedicated team committed to promoting a healthier lifestyle through the goodness of nature's bounty.</p>
      </div>

      <div className="about-card">
        <h1>Our Commitment:</h1>
        <p>Quality Assurance: We source our fruits and vegetables from trusted local farmers and reputable suppliers, ensuring that every item meets our stringent quality standards. From vibrant, crisp apples to succulent, garden-fresh tomatoes, each piece is handpicked for its freshness and flavor.</p>

        <p>Farm-to-Table Ethos: We believe in fostering a direct connection between farmers and consumers. By supporting local growers and sustainable agricultural practices, we contribute to the health of both our communities and the environment.</p>

        <p>Nutrition and Wellness: A healthy life begins with wholesome nutrition. Our commitment extends beyond providing delicious produce; we strive to empower our customers with information on the nutritional benefits of each fruit and vegetable, inspiring conscious and informed choices.</p>
      </div>
    </div>
  );
};

export default About;
