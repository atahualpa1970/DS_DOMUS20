import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="logo_domus20.png" alt="" width="50" height="50"/> Domus 2.0</Link>
                    <button className="navbar-toggler" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="btn btn-outline-light" aria-current="page" to="/formDates">Solicitar Cita</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-outline-light" to="/createDates">Confirmar Cita</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" 
                                    aria-expanded="false">Dropdown</a>
                                <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Separated link</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-outline-light disabled" to="/">Disabled</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
