import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/app/home">
                        <img src="../logo_domus20.png" alt="" width="50" height="50" /> Domus 2.0</Link>
                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item dropdown mx-2">
                                <a className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button"
                                    aria-expanded="false">Propiedades</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item disabled" href="/app/home">Listado</a></li>
                                    <li><a className="dropdown-item disabled" href="/app/home">Agregar</a></li>
                                    <li><a className="dropdown-item disabled" href="/app/home">Editar</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item disabled" to="/app/listDates">Reportes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button"
                                    aria-expanded="false">Caja</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item disabled" href="/app/home">Cobros</a></li>
                                    <li><a className="dropdown-item disabled" href="/app/home">Entradas</a></li>
                                    <li><a className="dropdown-item disabled" href="/app/home">Salidas</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item disabled" to="/app/listDates">Cierre</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" href="/app" role="button"
                                    aria-expanded="false">Agenda</a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/app/listDates">Solicitudes</Link></li>
                                    <li><Link className="dropdown-item" to="/app/confirmDate">Confirmar Cita</Link></li>
                                    <li><Link className="dropdown-item" to="/app/editDate">Editar Cita</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" href="/app/home">Actividades Diarias</Link></li>
                                    <li><Link className="dropdown-item" href="/app/home">Consultas</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="btn btn-outline-light disabled" to="/app/home">Administracion</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="btn btn-outline-light disabled" to="/app/home">Usuarios</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
