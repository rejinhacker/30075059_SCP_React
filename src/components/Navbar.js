// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleMenu, menuOpen }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">SCP Foundation</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => toggleMenu(!menuOpen)} // Toggle the menu on click
                    aria-controls="navbarNav"
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" onClick={() => toggleMenu(false)} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={() => toggleMenu(false)} to="/scp2">SCP-2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={() => toggleMenu(false)} to="/scp3">SCP-3</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={() => toggleMenu(false)} to="/scp4">SCP-4</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={() => toggleMenu(false)} to="/scp5">SCP-5</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={() => toggleMenu(false)} to="/scp6">SCP-6</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
