import React from 'react';
import { Link, useLocation  } from 'react-router-dom';

const Footer = () => {
    
    const location = useLocation();
    const rota = location.pathname 
    let addClass = "";   
    if (rota !== "/") {
        addClass = "footer-color2";
    }
  
    return (
        <footer className={`home-footer ${addClass}`}>
            <span className="footer__logo">
                <img className="footer__toggler" src="assets/tenor-clef-white.png" alt="Toggler" />
                <h1 className="footer__title">reno Bortot</h1>
            </span>
            <div className="footer__midle">
                <span className="footer__socials">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" ><img src="assets/iconmonstr-facebook-1-64.png" alt="social Face" /></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer" ><img src="assets/iconmonstr-youtube-1-64.png" alt="social Tube" /></a>
                </span>
                <p className="footer__copy" style={{ color: "white" }} >&copy;2021 by Breno Bortot, all rights reserved</p>
            </div>
            <Link to="/contact">Contact</Link>
        </footer>
    );
};

export default Footer;