import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';


import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';

function Landing(){
    return (
        <div id="page-landing" className="App">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy" />

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p> Muitas crianças estão esperando a sua visita :)</p>
                </main>

                <div className="location">
                    <strong> São pedro da Aldeia </strong>
                    <span> Rio de Janeiro </span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link>

            </div>
        </div>
    );
}

export default Landing;