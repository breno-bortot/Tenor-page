import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const rota = location.pathname
    let addClass = ""
    let images = [];
    if (rota !== "/") {
        addClass = "img2--position";
        images = ["assets/cropvert-650.jpg", "assets/cropvert-1200.jpg", "assets/cropvert-1500.jpg"]
    } else {
        images = ["assets/capa650.jpg", "assets/capa1200.jpg", "assets/capa1500.jpg"]
    }

    return (
        <header className="home-header">


            <picture className="home-header__picture">
                <source media="(max-width: 650px )" srcSet={images[0]} type="image/jpg" />
                <source media="(max-width:1200px )" srcSet={images[1]} type="image/jpg" />
                <img className={`home-header__img ${addClass}`} src={images[2]} alt="Imagem flexível" />
            </picture>

            <nav>

                <span className="nav__logo">

                    <label htmlFor="check" id="labelcheck"><img className="nav__toggler" src="assets/tenor-clef-white.png" alt="Toggler" /></label>
                    <h1 className="nav__title">reno Bortot</h1>
                </span>
                <input type="checkbox" id="check" />
                <ul className="nav__menu">
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/media'>
                        <li>Media</li>
                    </Link>
                    <Link to='/cv'>
                        <li>Curriculum</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link>
                </ul>
                <div className="nav__overlay"></div>
            </nav>
        </header>
    );
};

export default Header;