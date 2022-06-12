import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
                <Link className="navbar-brand" to="/app/home">
                    <img src="../domus20-1.png" alt="" width="100" height="50" />
                </Link>
                <h2 className="navTitle">Inmobiliaria Domus</h2>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item dropdown mx-2">
                            <Link className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button"
                                aria-expanded="false">Propiedades</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/app/newProp">Agregar</Link></li>
                                <li><Link className="dropdown-item" to="/app/adminProps">Editar</Link></li>
                                <li><Link className="dropdown-item" to="/app/listProps">Listado</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item disabled" to="/app/listDates">Reportes</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown mx-2">
                            <Link className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button"
                                aria-expanded="false">Caja</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/app/charges">Cobros</Link></li>
                                <li><Link className="dropdown-item" to="/app/inputsOutputs">Entradas/Salidas</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/app/cashClosing">Cierre de caja</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown mx-2">
                            <Link className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button"
                                aria-expanded="false">Agenda</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/app/listDates">Solicitudes</Link></li>
                                <li><Link className="dropdown-item" to="/app/newDate">Nueva Cita</Link></li>
                                <li><Link className="dropdown-item" to="/app/calendarDates">Calendario</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown mx-2">
                            <Link className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button"
                                aria-expanded="false">Administracion</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/app/transactions">Transacciones</Link></li>
                                <li><Link className="dropdown-item" to="/app/reports">Reportes</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/app/newClient">Nuevo Cliente</Link></li>
                                <li><Link className="dropdown-item" to="/app/adminClients">Admin Clientes</Link></li>
                                <li><Link className="dropdown-item" to="/app/listClients">Lista Clientes</Link></li>
                                <li><Link className="dropdown-item" to="/app/debtorClients">Lista Deudores</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="btn btn-outline-light" to="/app/listUsers">Usuarios</Link>
                        </li>
                        <li className="nav-item dropdown mx-2">
                            <Link className="btn btn-primary btn-sm dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button"
                                aria-expanded="false">Nombre Usuario<br/>Rol</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item disabled" to="/app/home">Salir</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}
