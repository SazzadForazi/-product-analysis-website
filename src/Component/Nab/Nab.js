import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Nab.css'

const Nab = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container d-block  pl-5 ml-5">
                <div className="collapse navbar-collapse d-flex justify-content-around fs-4" id="navbarNav">
                    <ul className="navbar-nav listyle">
                        <li className="nav-item">
                            <CustomLink to='/' className="nav-CustomLink active custom" aria-current="page">Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to='/reviews' className="nav-CustomLink active custom" aria-current="page">Review</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to='/dashBoard' className="nav-CustomLink active custom" aria-current="page">DashBoard</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to='/blog' className="nav-CustomLink active custom" aria-current="page">Blog</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to='/about' className="nav-CustomLink active custom" aria-current="page">About</CustomLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nab;