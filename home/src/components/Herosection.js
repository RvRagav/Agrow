// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <h1>Engage in the Wonder of Nature and Marketing</h1>
                <p>
                    Empowering farmers with real-time market updates and insights, helping them make informed decisions about agricultural commodity prices.
                </p>
                <img
                    src="https://i.pinimg.com/736x/d6/37/e3/d637e32dd21cec7a4a0d55806bf5cd8d.jpg"
                    alt="Nature Image"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </div>
        </section>
    );
};

export default HeroSection;
