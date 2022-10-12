import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="nav-bar">
            
            <div onClick={() => setOpen(!open)}>
                {open ? <XMarkIcon className="bar"/> : <Bars3Icon className="bar"/>
                }
            </div>
            
            <div className="nav-name">
            <img src="quiz-nav.png" alt="" />
            </div>

            <div className={`nav-item ${open ? 'active' : 'close'}`}>
                <nav>
                    <Link to ='/'>Home</Link>
                    <Link to = '/topic'>Topic</Link>
                    <Link to ='/statistic'>Statistic</Link>
                    <Link to ='/blog'>Blog</Link>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;