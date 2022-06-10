import React from 'react';
import about from '../about.png';
import { Link } from 'react-router-dom';
import './about.css';

const About = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">

                <div>
                    <h1 class="text-5xl font-bold font-serif">About Me</h1>
                    <p class="py-6">Hard-working individual with proficiency in React.js,Node.js, MongoDB, HTML, JavaScript, and CSS, as well as ability to communicate effectively in a team setting, and possessing a strong willingness to learn about entrepreneurship and business</p>
                    <div>
                        <div>
                            <ul className='flex justify-around font-bold '>
                                <li className='hover:text-pink-700'><Link to="/skills">Skills</Link> </li>
                                <li className='hover:text-pink-700'><Link to="/">Education</Link> </li>
                                <li className='hover:text-pink-700'><Link to="/">Home</Link> </li>
                                <li className='hover:text-pink-700'><Link to="/">Home</Link> </li>
                            </ul>

                        </div>
                    </div>

                </div>
                <img className=' w-1/2 rounded-lg' src={about} alt='' />
            </div>
        </div>
    );
};

export default About;