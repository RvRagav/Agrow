// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container d-flex justify-content-between flex-wrap">
                <div>
                    <h3>Location</h3>
                    <p>Madras Institute of Technology, Tambaram, Chennai</p>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <p>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZr33hBaSp-Nm1gCeFlgOhDZ5Wb3pnzJEeWA&s"
                            alt="Phone Logo"
                            style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '10px' }}
                        />
                        +91 6385931581
                    </p>
                    <p>For queries, contact: +91 6385931581, +91 6385932825</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
