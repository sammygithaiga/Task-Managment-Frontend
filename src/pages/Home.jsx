import React from 'react';
import '../styles/home.css';

export const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to TASKPULSE</h1>
        <p>Organize and track your projects efficiently.</p>
      </header>
      <main className="home-main">
        <section className="features-section">
          <h2>Features</h2>
          <div className="features">
            <div className="feature">
              <h3>Easy to Use</h3>
              <p>Our application is user-friendly and easy to navigate.</p>
            </div>
            <div className="feature">
              <h3>Collaboration</h3>
              <p>Work with your team seamlessly with our collaboration tools.</p>
            </div>
            <div className="feature">
              <h3>Track Progress</h3>
              <p>Keep track of your tasks and projects with ease.</p>
            </div>
          </div>
        </section>
        <section className="about-section">
          <h2>About Us</h2>
          <p>We are dedicated to providing the best task management solutions to help you stay organized and productive.</p>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2024 Task Management. All rights reserved.</p>
      </footer>
    </div>
  );
};
