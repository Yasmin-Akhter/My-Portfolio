import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import resume from '../../resume.pdf';

const Nav = () => {
    return (
        <div className='nav-style'>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/">Home</Link> </li>
                </ul>

            </nav>

            <div className="bannerText">

                <p className='tracking-widest mb-2 font-semibold font-mono'>FULL STACK WEB DEVELOPER</p>
                <h1 className="mb-5 text-5xl font-bold font-serif">Hello, I’m <span className='text-pink-900'>Yasmin</span> Welcome to my World. </h1>

                <button className="btn btn-primary "><a href={resume}>My Resume</a> </button>



            </div>
        </div>
    );
};

export default Nav;