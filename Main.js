import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <main className="main-section">
            <section className="hero">
                <h1>Welcome to Our Construction Company</h1>
                <p>Building the future, restoring the past.</p>
                <button className="cta-button">Get in Touch</button>
            </section>

            <section className="services">
            <div className="image">
                <h2>Our Services</h2>
                <div className="service-cards">
                    <div className="service-card">
                        <h3>Residential Construction</h3>
                        <p>We build homes tailored to your needs.</p>
                    </div>
                    <div className="service-card">
                        <h3>Commercial Construction</h3>
                        <p>Creating functional and modern commercial spaces.</p>
                    </div>
                    <div className="service-card">
                        <h3>Renovations</h3>
                        <p>Transforming your space into something new.</p>
                    </div>
                  </div>
                </div>
            </section>
            <section className="contact-form">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>
            
        </main>
    );
};

export default Main;