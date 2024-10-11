// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img
                    src="https://img.freepik.com/premium-photo/cute-leaf-cartoon-illustration_1026950-37591.jpg"
                    alt="Agrow Logo"
                    style={{ height: '50px' }}
                />
                Agrow
            </a>
            <div className="button-container">
                <button ><Link to="/login">Login</Link></button>
                <button ><Link to="/signup">Sign Up</Link></button>
                <button onClick={() => window.location.href = '#'}>Contact Us</button>
            </div>
        </nav>
    );
};

export default Navbar;
