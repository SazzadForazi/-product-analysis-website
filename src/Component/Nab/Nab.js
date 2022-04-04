import React from 'react';
import { Link } from 'react-router-dom';

const Nab = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container d-block  pl-5 ml-5">
                <div className="collapse navbar-collapse d-flex justify-content-around fs-4" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/review' className="nav-link active" aria-current="page">Review</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/dashBoard' className="nav-link active" aria-current="page">DashBoard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/blog' className="nav-link active" aria-current="page">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link active" aria-current="page">About</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nab;