import React from "react";
import logo from "../../logo.png";
import './Header.css'

export const Header = () => (
    <header className="header">
        <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="name pix">CRYPTOFOX</h1>
        </div>
        <nav className="navigation">
            <a href="/" className="nav-link">ABOUT US</a>
            <a href="/about" className="nav-link">TOPICS</a>
            <a href="/services" className="nav-link">SPEAKERS</a>
            <a href="/contact" className="nav-link">SPONSORS</a>
        </nav>
    </header>
)