import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import der spezifischen CSS für den Header

function Header() {
    return (
        <header>
            <div className="header-container">
                
            <Link to="/" className="Logo">
                    <h1>Pizzeria Italia</h1>
                </Link>
                <ul className="nav-links">
                    <li><Link to="/">Startseite</Link></li>
                    <li><Link to="/Pizzen">Pizzen</Link></li>
                    <li><Link to="/Nudelgerichte">Nudelgerichte</Link></li>
                    <li><Link to="/Salate">Salate</Link></li>
                    <li><Link to="/Getränke">Getränke</Link></li>
                </ul>
            </div>
        </header>

    );
}

export default Header;
