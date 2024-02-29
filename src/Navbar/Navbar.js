
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleHomeClick = (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSliderPosition(0);
    };

    

    const handleLinkClick = position => {
        setSliderPosition(position)
    }
    
    
    

    const handleContactClick = () => {
        const footer = document.getElementById('footer'); 
        footer.scrollIntoView({ behavior: 'smooth' }); 
        setSliderPosition(100); 
    };

    return ( 
        <div className="navbar-container">
            <div className={`navbar-links ${scrolled ? 'scrolled' : ''}`}>
                <a href="#home" onClick={(event) => { handleHomeClick(event); handleLinkClick(0); }}><span className="navbar-links-item">Home</span></a>
                <a href="#about" onClick={() => handleLinkClick(24)}><span className="navbar-links-item">About</span></a>
                <a href="#projects" onClick={() => handleLinkClick(48.9)}><span className="navbar-links-item">Projects</span></a>
                <a href="#footer" onClick={() => { handleContactClick(); handleLinkClick(75); }}><span className="navbar-links-item">Contact</span></a>
                <div className="nav-slider" style={{ left: `${sliderPosition}%` }}></div>
            </div>
        </div>
     );
}
 
export default Navbar;
