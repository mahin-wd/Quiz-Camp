import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-name">
            <img src="quiz.png" alt="" />
            </div>

            <div className="nav-item">
                <nav>
                    <Link to ='/'>Home</Link>
                    {/* <Link to = '/quiz'>Topic</Link> */}
                    <Link to ='/statistic'>Statistic</Link>
                    <Link to ='/blog'>Blog</Link>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;