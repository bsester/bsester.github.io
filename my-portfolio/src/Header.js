import React from 'react';
import Projects from "./Projects";
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container"><a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/aboutme">About Me</a></li>
                        <li className="nav-item"><a className="nav-link" href="/projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="/education">Education</a></li>
                    </ul>
                </div>
            </div>
        </nav>)
}

export default Header;