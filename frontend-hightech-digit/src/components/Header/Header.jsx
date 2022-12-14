import React from 'react';
import {NavLink} from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <header className="p-3 text-bg-dark">
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/frontend-hightech-digit/src/pages" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                                <use></use>
                            </svg>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="frontend-hightech-digit/src/components/Header/Header#" className="nav-link px-2 text-secondary">Home</a></li>
                            <li><a href="frontend-hightech-digit/src/components/Header/Header#" className="nav-link px-2 text-white">Features</a></li>
                            <li><a href="frontend-hightech-digit/src/components/Header/Header#" className="nav-link px-2 text-white">Pricing</a></li>
                            <li><a href="frontend-hightech-digit/src/components/Header/Header#" className="nav-link px-2 text-white">FAQs</a></li>
                            <li><a href="frontend-hightech-digit/src/components/Header/Header#" className="nav-link px-2 text-white">About</a></li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control form-control-dark text-bg-dark"
                                   placeholder="Search..." aria-label="Search"/>
                        </form>

                        <div className="text-end">
                            <NavLink to="/login" className="btn btn-outline-light me-2">Login</NavLink>
                            <NavLink to="/login" type="button" className="btn btn-warning">Sign-up</NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;